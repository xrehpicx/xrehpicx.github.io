import React from "react";
import styled from "styled-components";
import { ProjectType } from "./types";

export interface WorkProps {
  project: ProjectType;
  className?: string;
}

export const StyledWork = styled(Work)<WorkProps>`
  margin: 10px 0;
  z-index: 10;
  opacity: ${(p) => {
    if (p.project.props.status.name === "discontinued") {
      return p.theme.colors.main.type === "light" ? 0.6 : 0.4;
    }
    if (p.project.props.status.name === "In development") {
      return p.theme.colors.main.type === "light" ? 0.9999 : 0.8;
    }
    if (p.project.props.status.name === "Completed") {
      return p.theme.colors.main.type === "light" ? 0.8 : 0.6;
    }
  }};
  transition: background 500ms ease-out;

  h2 {
    width: fit-content;
    cursor: ${(p) => (Object.values(p.project.links).length ? "pointer" : "")};
    font-size: 2rem;
  }
  .about-project {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }
  .description {
    font-weight: 600;
  }
  .status {
    font-size: 0.8rem;
  }
`;

export function Work({ project, className }: WorkProps) {
  return (
    <div className={className}>
      <h2
        onClick={
          Object.values(project.links).length
            ? () => window.open(Object.values(project.links)[0])
            : undefined
        }
      >
        {project.title}
      </h2>
      <div className="about-project">
        {project.props.description && (
          <span className="description">
            {project.props.description?.content}
          </span>
        )}
        <span className="status">{project.props.status.name}</span>
      </div>
    </div>
  );
}
