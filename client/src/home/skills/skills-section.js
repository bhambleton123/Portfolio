import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import Skill from "./skill";

export default function SkillsSection({ name, skillNames }) {
  return (
    <Box display="flex" flexDirection="column" width="37%" mt="20px">
      <Typography color="primary">
        <Box textAlign="center" fontSize="30px" mb="10px">
          {name}
        </Box>
      </Typography>
      <Box>
        {skillNames.map((skillName, index) => (
          <Skill key={index} name={skillName} />
        ))}
      </Box>
    </Box>
  );
}
