import React from "react";

function HighlightText({children}) {
    return (
        <span className="text-secondary text-red-600">
            {children}
        </span>
    );
    }

    export default HighlightText;