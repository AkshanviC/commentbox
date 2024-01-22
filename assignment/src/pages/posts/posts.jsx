import LockOutlined from "@mui/icons-material/LockOutlined";
import { Avatar } from "@mui/material";
import { Container, Stack } from "@mui/system";
import CommentsAndReplies from "./components/commentAndReply";
import { mockDataObj } from "./components/mockdata";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Posts() {
  const [mockData, setMockData] = useState(mockDataObj);
  const [addReply, setAddReply] = useState(false);
  const [addComment, setAddComment] = useState("");
  const [updated, setUpdated] = useState("");
  const user = useSelector((state) => state.counter.name);
  const handleAddComment = (index) => {
    setMockData([
      ...mockData,
      { image: "", name: user, posts: addComment, replies: [] },
    ]);
    setAddComment("");
    setAddReply(false);
  };
  return (
    <Container maxWidth="lg">
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Stack spacing={2}>
          <Stack>
            <span className="heading">Name</span>
            <span className="commenttitle">2d</span>
          </Stack>
          <span>
            One more year loaded with sweet recollections and cheerful times has
            passed. All my friends made my year exceptionally uncommon, and I
            wish this continues forever. With you around, each minute is a
            unique event for me. I wish you to Happy new year to all of you.
          </span>
          <Stack className="bordergrayY">
            <h4 className="commenttitle">Comments</h4>
          </Stack>
          {mockData?.map((data, index) => (
            <CommentsAndReplies
              key={`${data.name}${index}`}
              name={data.name}
              posts={data.posts}
              replies={data.replies}
              setUpdated={setUpdated}
              setMockData={setMockData}
              mockData={mockData}
              index={index}
            />
          ))}
          {addReply ? (
            <>
              <TextField
                id="outlined-multiline-flexible"
                label="Add Comment"
                multiline
                maxRows={4}
                value={addComment}
                onChange={(e) => setAddComment(e.target.value)}
              />
              <Stack direction="row">
                <Button onClick={() => handleAddComment("")}>
                  Add Comment
                </Button>
                <Button onClick={() => setAddReply(false)}>Cancel</Button>
              </Stack>
            </>
          ) : (
            <div className="reply">
              <Button
                variant="text"
                size="small"
                onClick={() => setAddReply(true)}
              >
                Comment
              </Button>
            </div>
          )}
        </Stack>
      </Stack>
    </Container>
  );
}
