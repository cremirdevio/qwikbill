import PropTypes from "prop-types";
import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import Label from "../../components/ui/label";
import StepperIndicator from "../../components/stepperIndicator";

export default function RegisterStepOne({ setStep }) {
  return (
    <div className="flex flex-col bg-white h-full px-8">
      <StepperIndicator currentStep={1} totalSteps={4} setStep={setStep} />
      <h2 className="font-secondary text-xl font-bold text-gray-700">
        What&apos;s your Email Address?
      </h2>
      <div className="h-10 mt-2.5 mb-[18px]">
        <p className="font-secondary text-base font-light text-gray-600">
          You will receive a verification code so make sure it is active
        </p>
      </div>
      <Label htmlFor="e-mail">Email Address</Label>
      <Input type="e-mail" id="e-mail" />
      <Button variant="solid" size="lg" className="mt-[120px]">
        Continue
      </Button>
    </div>
  );
}

RegisterStepOne.propTypes = {
  setStep: PropTypes.number.isRequired,
};