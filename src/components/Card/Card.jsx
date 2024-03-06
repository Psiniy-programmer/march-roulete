import React from "react";
import './styles.css'

export const Card = ({children}) => {
    
    return <div class="stack">
	<div class="card">
		<div class="image">
            {children}
		</div>
	</div>
</div>
};