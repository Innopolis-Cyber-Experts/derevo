import { Typography } from "antd";
import { useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";


const { Title, Text } = Typography;

export default function Analyzing() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/disassembly");
    }, 2000);
  }, [])

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#00b96b"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <Title level={4}>Analyzing..</Title>
      </div>
    </div>
  );
}
