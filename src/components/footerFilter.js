import React from "react";
import FooterLink from "./filterlink";
export default function footer({ activeFilter, filterTodo }) {
  return (
    <div className="Footer">
      <FooterLink
        activeFilter={activeFilter}
        onClickFilter={filterTodo}
        actionType="ALL"
      >
        ALL
      </FooterLink>{" "}
      <FooterLink
        activeFilter={activeFilter}
        onClickFilter={filterTodo}
        actionType="TODO"
      >
        TODO
      </FooterLink>{" "}
      <FooterLink
        activeFilter={activeFilter}
        onClickFilter={filterTodo}
        actionType="COMPLETED"
      >
        COMPLETED
      </FooterLink>
    </div>
  );
}
