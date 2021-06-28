import React from 'react';
import ReactTable from 'react-table';

const  DataTable = ({title,columns,transactionData,getIndividualTransactions}) =>{
    return(
        <div className="container">
            <div className="row" style={{}}>
            <div className="col-10">
                <h2>{title}</h2>
            </div>
            </div>
            <div className="row">
          <div className="col-8">
            <ReactTable
              data={transactionData}
              defaultPageSize={5}
              columns={columns}
              SubComponent={row => {
                return (
                  <div>
                    
                      {getIndividualTransactions(row).map(({transactionDt, amt, points},index)=>{
                        return <div className="container" key={index}>
                          <div className="row">
                            <div className="col-8">
                              <strong>Transaction Date:</strong> {transactionDt} - <strong>$</strong>{amt} - <strong>Points: </strong>{points}
                            </div>
                          </div>
                        </div>
                      })}                                    

                  </div>
                )
              }}
              />             
            </div>
          </div>
        </div>
    )
}
export default DataTable;