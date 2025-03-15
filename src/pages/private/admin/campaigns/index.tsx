import { Button, message, Table } from "antd";
import PageTitle from "../../../../components/page-title";
import { useNavigate } from "react-router-dom";
import { CampaignTypeProps } from "../../../../interfaces";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Trash2, Pencil } from "lucide-react";

function CampaignsPage() {
    const navigate = useNavigate();
    const [campaigns, setCampaigns] = useState<CampaignTypeProps[]>([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/campaigns/get-all");
            setCampaigns(response.data);
        } catch (error: any) {
            message.error(error.message);
        }finally{
            setLoading(false);
        }
    };

    const onDelete = async (id: string) => {
        try {
          setLoading(true);
          await axios.delete(`/api/campaigns/delete/${id}`);
          message.success("Campaign deleted successfully");
          getData();
        } catch (error: any) {
          message.error(error.message);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);

    const columns = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Organizer",
          dataIndex: "organizer",
          key: "organizer",
        },
        {
          title: "Target Amount",
          dataIndex: "targetAmount",
          key: "targetAmount",
          render: (targetAmount: number) => `$${targetAmount}`,
        },
        {
          title: "Collected Amount",
          dataIndex: "collectedAmount",
          key: "collectedAmount",
          render: (collectedAmount: number) => `$${collectedAmount}`,
        },
        {
          title: "Is Active",
          dataIndex: "isActive",
          key: "isActive",
          render: (isActive: boolean) => (isActive ? "Yes" : "No"),
        },
        {
          title: "Created At",
          dataIndex: "createdAt",
          key: "createdAt",
          render: (createdAt: string) =>
            dayjs(createdAt).format("MMM DD, YYYY hh:mm A"),
        },
        {
          title: "Actions",
          key: "actions",
          render: (_text: string, record: CampaignTypeProps) => (
            <div className="flex gap-5">
              <Button
                size="small"
                className="border-primary border"
                onClick={() => onDelete(record._id)}
              >
                <Trash2 size={13} />
              </Button>
              <Button size="small" className="border-primary border">
                <Pencil
                  size={13}
                  onClick={() => navigate(`/admin/campaigns/edit/${record._id}`)}
                />
              </Button>
            </div>
          ),
        },
      ];
    

    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <div className="flex justify-between items-center">
                <PageTitle title="Campaigns Page" />
                <Button type="primary"
                    onClick={() => navigate("/admin/campaigns/create")}
                >Create Campaign</Button>
            </div>

            <Table columns={columns} dataSource={campaigns} loading={loading} />
        </div>
    )
}

export default CampaignsPage;