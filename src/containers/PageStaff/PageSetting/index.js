import React from "react";
import { Button, Input, Checkbox } from "antd";
import { SocialIcon } from 'react-social-icons';

const { TextArea } = Input;


class PageSetting extends React.Component {
  render() {
    return (
      <div>
        <h1>Setting</h1>
        <div>
        <h2>Crisis Type</h2>
        <form>
        <label>
          <select>
            <option>Fire</option>
            <option>Gas Leak</option>
            <option>Casualty</option>
            <option>Others</option>
          </select>
        </label>
        <Button type="primary">Submit</Button>
        </form>
      </div>
        <h2>Assistance Type</h2>
        <div>
        <form>
        <label>
          <select>
            <option>Emergency Ambulance</option>
            <option>Rescue and Evacuation</option>
            <option>Fire-Fighting</option>
            <option>Gas Leak Control</option>
            <option>Others</option>
          </select>
        </label>
        <Button type="primary">Submit</Button>
      </form>
      </div>
      <div>
        <h2>Social Media Account</h2>
        <SocialIcon url="http://twitter.com"/>
        <SocialIcon url="http://facebook.com"/>
      </div>
      <div>
        <h2>Emergency Agencies</h2>
        
      </div>

      <div>
        <h2>Summary Reporting Email</h2>
        <TextArea rows={1} />
      </div>

      <div>
        <Button type="primary">Apply</Button>
      </div>
      </div>
    );
  }
}

export default PageSetting;
