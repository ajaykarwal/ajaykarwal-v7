import React from "react";
import skillsList from "../../data/skills";

const SkillsListing = () => {
  return (
    <div className="skills-list">
      {skillsList.map(skill => (
        <dl key={skill.label}>
          <dt>{skill.label}</dt>
          <dd>
            {skill.data.map(item => (
              <p>{item}</p>
            ))}
          </dd>
        </dl>
      ))}
    </div>
  );
};

export default SkillsListing;
