import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Typography, Box, Link } from "@material-ui/core";

export default function DownloadResume() {
  return (
    <Box
      mt="20px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pt="20px"
      pb="200px"
    >
      <Typography color="primary" variant="h6">
        <Box mb="10px">Download my resume!</Box>
      </Typography>
      <Link href="https://portfoliobrianhambleton.s3.us-west-1.amazonaws.com/Portfolio_assets/Brian_Hambleton_Resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIQCEjxLA4%2FwlHv5%2BIcUE81%2B5c7AciLGMSkiiSQwxDmG6uQIgGAjPwyVAw%2B8eGPtO5vRWJQJYVyuAcbY0dtabphWvXQwq5gEIERAAGgw5MDYyMTU3MTQ5NTQiDARHPIooU1f65DvlNCrDAevRadjWBESmUGKTq4d%2FQYee1Ok1BeKZGwVERyIsH9G%2FuSZzWTOnfvlMbP4HBrnMFfx3MOhkren2fTvUgVNQH1W1kB3o5DJ2ns20t7TknDDVWDY1SO6vbqnjZhKcYuLo0cppDvkaeL%2BUkBoO9lePy4Hf%2FuVlZhasfiznOzl%2FJyG3lTQ8vo6jWU6sGO2zFf1EGBZYvBeJ6fHpx0NMYLOhwx%2Bdwzdfxnf1menDWsOvIBW3tp9%2FHHib6U0CKBoFrhEZtOJPyDCh8PT0BTrwAqu5ECFliBg0wBzoNUCsrmm0GPHziwGqVfMMBM8G6nu7OwwZi5%2FAlIi%2BBvaLA0LjyYtyRkxnSvgZgA0qdWlRGBJx630vs97TWeRhOoocIqIHpCOSPjZLiTotrWunlV0dCApbDgvdRlYJ21J7ynJ1aQk6isszq3Vo8uWUCN1MR8jXok6oY%2BuomyOLXAo97oZeJZf81NoSYd7mKUP8GvDBIw18RHaQJZ5EbQzAHADJW3iWTQ13laz6bPcQA%2Fr0X9kYrEiVKvXRMSwSMacIB1Ro0aBvOvTiupMIlmGJ33F%2BHxNKhnhrK%2Fjui7rEHUqB8PTZDViApZdr%2FGK0YE0i%2B9kYcKbPYmDQLOR06y5FMW1QoN4ppBNU6btje%2FOaBktbgwfehk9qEsaJsOjLkcnWiIuRKqKojmpb8HIHwL6YDVtTdtklo4rEcXzoAcWN%2F8QKRqsyQDoOQFdqYjFLTxs18smzxgXQhIsK5oUY0d25yM6VwvR7&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200420T073208Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5F7VKOCFHYAU77PB%2F20200420%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=8f1728de6edac1f6360a9b2ba4535212673bd516838f7d0086123297f369c2bf">
        <GetAppIcon color="primary" />
      </Link>
    </Box>
  );
}
