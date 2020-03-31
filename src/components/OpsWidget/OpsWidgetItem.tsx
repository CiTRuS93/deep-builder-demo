import React from "react";
import { Label } from "semantic-ui-react";

export interface OpsWidgetItemProps {
    model: any;
    color?: string;
    name: string;
    args?: any;
    data?: any;
}

export const OpsWidgetItem: React.FC<OpsWidgetItemProps> = props => {
    const handleDragStart =  (event: any) => {
        if (props.model.type === "_Model") {
            event.dataTransfer.setData("model-node", JSON.stringify({ 
                model: props.model,
                name: props.name,
                data: props.data
            }))
            return;
        }
        event.dataTransfer.setData("ops-node", JSON.stringify({ 
            model: props.model,
            name: props.name,
            args: props.args,
            color: props.color
        }));
        return;
    }
    
    return (
        <div
            draggable={true}
            onDragStart={handleDragStart}
            className={"ops-bucket__item " + "ops-bucket--" + props.color}
        >
            <div className="ops-bucket__label">
                {props.name}
            </div>
        </div>
    )
}
