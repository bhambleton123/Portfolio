import React from "react";
import { Box, Typography } from "@material-ui/core";
import Skill from "./skill";

export default function SkillsSection({ name, skillNames }) {
  return (
    <Box display="flex" flexDirection="column" width="30%">
      <Typography color="primary">
        <Box textAlign="center" fontSize="30px" mb="10px">
          {name}
        </Box>
      </Typography>
      <Box>
        {skillNames.map((skillName) => (
          <Skill name={skillName} />
        ))}
      </Box>
    </Box>
  );
}
