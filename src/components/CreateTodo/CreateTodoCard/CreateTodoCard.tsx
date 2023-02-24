import React  from 'react';

function CreateTodoCard(props:any){
    return (
        <React.Fragment>
            <div className='CreateTodoCard'>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export { CreateTodoCard }