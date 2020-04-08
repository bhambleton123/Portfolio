import React from "react";
import { Box, Typography } from "@material-ui/core";
import Skill from "./skill";

export default function Skills({ name, skillNames }) {
  return (
    <Box display="flex" flexDirection="column" width="20%">
      <Typography color="primary">
        <Box textAlign="center">{name}</Box>
      </Typography>
      <Box>
        {skillNames.map((skillName) => (
          <Skill name={skillName} />
        ))}
      </Box>
    </Box>
  );
}
