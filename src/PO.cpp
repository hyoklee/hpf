
/****************************************************************************** 
 /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Copyright by the Board of Trustees of the University of Illinois.         *
 * All rights reserved.                                                      *
 *                                                                           *
 * This file is part of HDF5.  The full HDF5 copyright notice, including     *
 * terms governing use, modification, and redistribution, is contained in    *
 * the files COPYING and Copyright.html.  COPYING can be found at the root   *
 * of the source code distribution tree; Copyright.html can be found at the  *
 * root level of an installed copy of the electronic HDF5 document set and   *
 * is linked from the top-level documents page.  It can also be found at     *
 * http://hdf.ncsa.uiuc.edu/HDF5/doc/Copyright.html.  If you do not have     *
 * access to either file, you may request a copy from hdfhelp@ncsa.uiuc.edu. *
 *  
 *****************************************************************************/

#include "PO.h"

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      8/11/06                      
 *
 * Purpose:             The parent class for all the classes that coule be written
 *                      in a database
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
  

PO::PO()
{
    m_id = -1;
}

PO::PO(PO& po)
{
    m_id = po.getId();
}

PO::~PO()
{
}

void PO::setId(int id)
{
    m_id = id;
}

int PO::getId()
{    
    return m_id;
}



