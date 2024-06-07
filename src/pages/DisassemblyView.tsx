import { AppstoreFilled, FileTextFilled, FileTextOutlined } from "@ant-design/icons";
import { Divider, Flex, List, Tree, TreeDataNode, Typography } from "antd";

const dFunctionsList = ["main", "_init", "_entry0", "some_random_function"];

const treeData: TreeDataNode[] = [
  {
    title: "Functions",
    key: "0-0",
    children: [
      {
        title: "main",
        key: "f_main",
        icon: <FileTextOutlined />,
      },
      {
        title: "_fini",
        key: "f__fini",
        icon: <FileTextOutlined />,
      },
      {
        title: "_entry0",
        key: "f__entry0",
        icon: <FileTextOutlined />,
      },
      {
        title: "some_random_function",
        key: "f_some_random_function",
        icon: <FileTextOutlined />,
      },
    ],
  },
];


const { Title, Text } = Typography;

export default function DisassemblyView() {
  return (
    <Flex style={{ width: "100%", height: "100%", margin: 0, padding:0, overflow: "hidden" }}>
      {/* Sidebar */}
      <Flex style={{ height: "100%", margin: "1vh" }} vertical>
        <Title level={4} style={{marginTop: "0"}}>Symbols</Title>
        <Tree showIcon treeData={treeData} showLine />
        <Divider/>
        {/* <Title level={4} style={{marginTop: "0"}}>Types</Title>
        <Divider/>
        <Title level={4} style={{marginTop: "0"}}>Alerts</Title>
        <Divider/>
        <Title level={4} style={{marginTop: "0"}}>Rules</Title>
        <Divider/> */}
      </Flex>
      <Divider type="vertical" style={{height: "100%"}}/>

      {/* Main view */}
      <div style={{ height: "100%" }}></div>
    </Flex>
  );
}
