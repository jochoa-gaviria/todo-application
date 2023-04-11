import React  from "react";

function TodoHeader({ children, loading }:any) {
    return (
        <header>
            {
                React.Children
                    .toArray(children)
                    .map((child:any) =>
                        React.cloneElement(child, { loading })
                    )
            }
        </header>
    )
}

export { TodoHeader }