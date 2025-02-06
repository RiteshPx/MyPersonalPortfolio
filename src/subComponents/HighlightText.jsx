import React from "react";

function HighlightText({children}) {
    return (
        <span className="text-secondary">
            {children}
        </span>
    );
    }

    export default HighlightText;