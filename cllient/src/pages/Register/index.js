import React, { useEffect } from "react";
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../../apicalls/users";
import Button from "../../components/Button";
function Index() {

  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(values)
    try {
     
      const response = await RegisterUser(values);
      
      if (response.success) {
        message.success(response.message);
        navigate("/login");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      
      message.error(error.message);
    }
  };

  return (
    <div className="h-screen bg-primary flex items-center justify-center">
      <div className="authentication-form bg-white p-3 rounded">
        <h1 className="text-secondary text-2xl font-bold mb-1">
          TÖLLÖ LIBRARY - REGISTER
        </h1>
        <hr />
        <Form layout="vertical"   onFinish={onFinish}  >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <input type="text" placeholder="Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <input type="number" placeholder="Phone Number" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <input type="password" placeholder="Password" />
          </Form.Item>

          <div className="text-center mt-2 flex flex-col gap-1">
          <Button title="Register" type="submit" />
            <Link to="/login" className="text-primary text-sm underline">
              Already have an account? Click Here To Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Index;
