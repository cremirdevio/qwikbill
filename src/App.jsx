// import Label from "./components/ui/label";
import Login from "./pages/login";
// import Onboarding from "./pages/onboarding";

function App() {
  // Router implementation here
  return (
    <div className="flex text-3xl bg-orange-500 h-screen md:w-[700px]">
      {/* <Badge variant="solid" />
      <Button variant="solid" size="lg">
        Sign in
      </Button>
      <Input placeholder="Enter your e-mail" type="text" /> */}
      {/* <Onboarding /> */}
      <Login />
    </div>
  );
}

export default App;
