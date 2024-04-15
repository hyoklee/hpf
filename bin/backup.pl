#! /usr/bin/perl -w
# Backup DBs under /scr/hyoklee/backup/ first.
opendir(DBHANDLE, "/var/lib/mysql/");
@dbfilenames = readdir(DBHANDLE); #returns a list of filenames
closedir(DBHANDLE);

foreach(@dbfilenames){

    if($_ eq "." || $_ eq ".." || $_ eq "mysql.sock" || $_ =~ m/^ib/ || $_ =~ m/err$/ || $_ =~ m/pid$/ ){
        # Do nothing
    }
    else{

        ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime(time);
        ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime(time);
	#echo $wday.$isdst.$yday;
        if ($sec < 10)
        {
            $sec = "0".$sec;
        }
        if ($min < 10)
        {
            $min = "0".$min;
        }
        if ($hour < 10)
        {
           $hour = "0".$hour;
        }
        if ($mday < 10)
        {
            $mday = "0".$mday;
        }
        if (($mon + 1) < 10)
        {
            $mon = "0".($mon + 1);
        }
        else
        {
            $mon = ($mon + 1);
        }

        $SysCall = 'mysqldump -u root  --add-drop-table --force --quick --single-transaction '.$_.' | gzip -c > /scr/hyoklee/backup/'.($year+1900).'_'.($mon).'_'.$mday.'_'.$hour.'_'.$min.'_'.$sec.'_DB_'.$_.'.gz';
        system 'echo "Starting... '.$SysCall .'" >> /scr/hyoklee/backup/operations.log';
        system $SysCall;
        system 'echo "Ending..... '.$SysCall .'" >> /scr/hyoklee/backup/operations.log';
    }
}

# Delete 30 days old data
($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime(time - 60*60*24*30);
#echo $wday.$isdst.$yday;
if ($sec < 10)
{
    $sec = "0".$sec;
}
if ($min < 10)
{
    $min = "0".$min;
}
if ($hour < 10)
{
    $hour = "0".$hour;
}
if ($mday < 10)
{
    $mday = "0".$mday;
}
if (($mon + 1) < 10)
{
    $mon = "0".($mon + 1);
}
else
{
    $mon = ($mon + 1);
}

$SysCall = 'rm -f /scr/hyoklee/backup/'.($year+1900).'_'.($mon).'_'.$mday.'_'.'*.gz';
system 'echo "Starting... '.$SysCall .'" >> /scr/hyoklee/backup/operations.log';
system $SysCall;
system 'echo "Ending..... '.$SysCall .'" >> /scr/hyoklee/backup/operations.log';



