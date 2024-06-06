import { FastBackwardFilled, UploadOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import Upload, { RcFile } from "antd/es/upload";

const { Title, Text } = Typography;

export default function StartPage() {
  function handleUpload(file: RcFile) {

    return false;
  }

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
        <Title level={1}>
          de<Title type="success" style={{display: "inline"}}>rev</Title>o
        </Title>
        <Upload beforeUpload={handleUpload} maxCount={1}>
          <Button icon={<UploadOutlined />}>Choose file</Button>
        </Upload>
        <Button icon={<FastBackwardFilled/>} style={{marginTop: "2vh"}} type="primary">
           Reverse
         </Button>
      </div>
    </div>
  );
}