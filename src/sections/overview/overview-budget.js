import PropTypes from "prop-types";
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";
import uuid from "uuid";
import { DragDropContext, Droppable, Dragabble } from "react-beautiful-dnd";
import { useState } from "react";

export const OverviewBudget = (props) => {
  const itemsFromBackend = [
    { id: "101", content: "First Task" },
    { id: "102", content: "Second Task" },
  ];

  const columnsFromBackend = {
    "mcmslc": {
      name: "TODO",
      items: itemsFromBackend,
    },
  };
  const { difference, positive = false, sx, value } = props;
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <DragDropContext onDragEnd={(result) => console.log(result)}>
      {Object.entries(columns).map(([id, column]) => {
        return (
          <Droppable droppableId={id}>
            {(provided, snapshot) => {
              return (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    background: snapshot.isDraggingOver ? "lightblue" : "#F5F5F5",
                    padding: 4,
                    width: 250,
                    minHeight: 500,
                    borderRadius: "16px 16px 0px 0px",
                  }}
                >
                  {column?.items?.map((item, index) => {
                    return (
                      <Dragabble index={index} key={item.id} draggableId={item.id}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              // style={{
                              //   margin: "0 0 8px 0",
                              //   padding: 0,
                              //   userSelect: "none",
                              //   borderRadius: "16px",
                              //   background: "#FFFFFF",
                              //   minHeight: "50px",
                              // }}
                            >
                             
                            </div>
                          );
                        }}
                      </Dragabble>
                    );
                  })}
                </div>
              );
            }}
          </Droppable>
        );
      })}
    </DragDropContext>
  );
};

OverviewBudget.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired,
};
