CREATE TABLE TestAction_New AS SELECT  * FROM TestAction WHERE 1 GROUP BY TestAction_Name;
DROP TABLE TestAction;
RENAME TABLE TestAction_New TO TestAction;
