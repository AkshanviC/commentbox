import { Stack } from "@mui/system";
import { Avatar } from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CommentsAndReplies({
  name,
  posts,
  replies,
  mockData,
  setUpdated,
  setMockData,
  index,
  editable,
}) {
  const username = useSelector((state) => state.counter.name);
  const Reply = ({ name, posts, replies, setRecursion }) => {
    const [addReply, setAddReply] = useState(false);
    const [innerReply, setInnerReply] = useState([]);
    const [newReply, setNewReply] = useState();
    const handleAddReply = () => {
      let value = {
        image: "",
        name: username,
        posts: newReply,
        replies: [],
      };

      if (innerReply) {
        setInnerReply([...innerReply, value]);
      } else {
        setInnerReply([value]);
      }
      setNewReply("");
      setAddReply(false);
    };
    useEffect(() => {
      // console.log(innerReply, "lol");
    }, [innerReply]);
    console.log(editable);
    return (
      <Stack direction="row" spacing={2}>
        {/* <Stack> */}
        <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        {/* <div className="mapper"></div>
        </Stack> */}
        <Stack spacing={2}>
          <div className="commentBg">
            <Stack spacing={2}>
              <h2>{name}</h2>
              <span>{posts}</span>
              {/* <Stack>
            <h4>{name}</h4>
          </Stack> */}
            </Stack>
          </div>
          {addReply ? (
            <>
              <TextField
                id="outlined-multiline-flexible"
                label="Add Comment"
                multiline
                maxRows={4}
                value={newReply}
                onChange={(e) => {
                  setNewReply(e.target.value);
                }}
              />
              <Stack direction="row">
                <Button onClick={handleAddReply}>Add</Button>
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
                Reply
              </Button>
              {editable === "true" ? (
                <Button
                  variant="text"
                  size="small"
                  onClick={() => setAddReply(true)}
                >
                  Edit
                </Button>
              ) : (
                ""
              )}
            </div>
          )}

          {replies?.length && replies[0]
            ? replies.map((dataTwo, index) => (
                <>
                  <Reply
                    key={`${dataTwo.name}${index}`}
                    name={dataTwo.name}
                    posts={dataTwo.posts}
                    replies={dataTwo.replies}
                    // nestedReply={nestedReply}
                    // setNestedReply={setNestedReply}
                    // recursion={recursion}
                    // hirarechy={hirarechy + 1}
                    // setRecursion={setRecursion}
                    // index={index}
                  />
                </>
              ))
            : ""}
          {innerReply?.map((dataThree, index) => {
            return (
              <Reply
                key={`${dataThree.name}${index}`}
                name={dataThree.name}
                posts={dataThree.posts}
                replies={dataThree.replies}
                setRecursion={setRecursion}
                editable="true"
              />
            );
          })}
        </Stack>
      </Stack>
    );
  };

  const [newReply, setNewReply] = useState("");
  const [addReply, setAddReply] = useState(false);
  const [nestedReply, setNestedReply] = useState([]);
  const [recursion, setRecursion] = useState(0);
  const handleAddReply = (index) => {
    console.log(nestedReply, "lol");
    if (!nestedReply) {
      setNestedReply([
        {
          image: "",
          name: username,
          posts: newReply,
          replies: [],
        },
      ]);
    } else {
      console.log("unkonw");
      setNestedReply([
        ...nestedReply,
        {
          image: "",
          name: username,
          posts: newReply,
          replies: [],
        },
      ]);
    }
    setAddReply(false);
    setNewReply("");
    setRecursion((value) => value + 1);
    // setRecursion(0);
  };
  useEffect(() => {}, [nestedReply]);

  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>
      <Stack>
        <div className="commentBg">
          <Stack spacing={2}>
            <span className="heading">{name}</span>
            <span>{posts}</span>
            {/* <Stack>
          <h4>Comments</h4>
        </Stack> */}
          </Stack>
        </div>
        {addReply ? (
          <>
            <TextField
              id="outlined-multiline-flexible"
              label="Add Comment"
              multiline
              maxRows={4}
              value={newReply}
              onChange={(e) => {
                setNewReply(e.target.value);
              }}
            />
            <Stack direction="row">
              <Button onClick={() => handleAddReply(index)}>Add</Button>
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
              Reply
            </Button>
          </div>
        )}

        {replies?.length && replies[0]
          ? replies?.map((data, index) => (
              <div className="mt-2">
                <Reply
                  key={`${data.name}${index}`}
                  name={data.name}
                  posts={data.posts}
                  replies={data.replies}
                  // nestedReply={nestedReply}
                  // setNestedReply={setNestedReply}
                  // recursion={recursion}
                  setRecursion={setRecursion}
                  // hirarechy={1}
                />
              </div>
            ))
          : ""}
        {nestedReply?.map((data, index) => (
          <div className="mt-2">
            <Reply
              key={`${data.name}${index}`}
              name={data.name}
              posts={data.posts}
              replies={data.replies}
              setRecursion={setRecursion}
              editable="true"
            />
          </div>
        ))}
      </Stack>
    </Stack>
  );
}
