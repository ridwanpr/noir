import Button from "../common/Button";
import CheckBox from "../common/Form/Checkbox";
import Form from "../common/Form/Form";
import FormGroup from "../common/Form/FormGroup";
import Input from "../common/Form/Input";
import { EmailIcon, LockIcon } from "../common/Icons";

const LoginForm = () => {
  return (
    <>
      <Form>
        <FormGroup label="Email" name="email">
          <span className="absolute left-3 top-3.5 w-5 h-5 text-gray-500">
            <EmailIcon />
          </span>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            required={true}
          />
        </FormGroup>
        <FormGroup label="Password" name="password">
          <span className="absolute left-3 top-3.5 w-5 h-5 text-gray-500">
            <LockIcon />
          </span>
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            required={true}
          />
        </FormGroup>

        <CheckBox name="remember-me" type="checkbox" title="Remember me" />
        <Button styles="w-full">Sign In</Button>
      </Form>
    </>
  );
};

export default LoginForm;
