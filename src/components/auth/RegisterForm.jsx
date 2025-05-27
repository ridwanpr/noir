import Button from "../common/Button";
import CheckBox from "../common/Form/Checkbox";
import Form from "../common/Form/Form";
import FormGroup from "../common/Form/FormGroup";
import Input from "../common/Form/Input";
import { EmailIcon, LockIcon, UserIcon } from "../common/Icons";

const RegisterForm = () => {
  return (
    <Form>
      <FormGroup label="Full Name" name="name">
        <span className="absolute left-3 top-3.5 w-5 h-5 text-gray-500">
          <UserIcon />
        </span>
        <Input
          name="name"
          type="text"
          placeholder="Enter your name"
          required={true}
        />
      </FormGroup>
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
          placeholder="••••••••"
          required={true}
        />
      </FormGroup>
      <FormGroup label="Confirm Password" name="confirm-password">
        <span className="absolute left-3 top-3.5 w-5 h-5 text-gray-500">
          <LockIcon />
        </span>
        <Input
          name="password"
          type="password"
          placeholder="••••••••"
          required={true}
        />
      </FormGroup>
      <CheckBox
        name="remember-me"
        type="checkbox"
        title="I agree to the Terms of Service and Privacy Policy. "
      />
      <Button styles="w-full">Sign Up</Button>
    </Form>
  );
};

export default RegisterForm;
