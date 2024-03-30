import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex flex-col md:flex-row md:items-center p-3 max-w-3xl mx-auto gap-5">
        {/* LEFT */}
        <div className="flex-1">
          <Link
            to="/"
            className="font-bold dark:text-white text-3xl md:text-2xl "
          >
            <span className="px-2 py-1 bg-gradient-to-r from-pink-400 via-pink-300 to-blue-400 rounded-xl text-white">
              Save Street Child
            </span>
            <span className="text-base px-1">Sidoarjo</span>
          </Link>
          <p className="text-sm mt-5">
            Save Street Child Sidoarjo Community is a platform for everyone to
            independently help foundations/individuals in need. You can sign up
            with your email and password.
          </p>
        </div>
        {/* RIGHT */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Email" />
              <TextInput type="email" placeholder="user@gmail.com" id="email" />
            </div>
            <div>
              <Label value="Password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              outline
              type="submit"
              // disabled={loading}
            >
              {" "}
              Sign Up
              {/* {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )} */}
            </Button>
            {/* <OAuth /> */}
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {/* {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )} */}
        </div>
      </div>
    </div>
  );
}
