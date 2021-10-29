import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAACACAMAAABeD5UAAAAAilBMVEX///9PjvVPjfVJivRKivRJifRTkPVQjvVIifTy8vJRj/VOjfVLi/VNjPVSj/VMjPVHiPRMi/VSkPWmxfqnxvpGiPRFfeVCeN749/LP2/NHg+z//fKQsfM5g/Xg5fKewPk3cNsrfvXL3PtflfTj7P2yx/TX5Px2pPVqnvaXuviFrvhdiuSGqu/A0fN25IY/AAAEo0lEQVRoga3a627iOhQFYEMS8CEJMcN4plDSDgNloOfM+7/eyT2O98V2ylKlVvz4tLR9iagiRJ3b+5/LNKtvTFZ1it/CK9e7Ttfb1SQts62zabJusmiyrCMfXvxNr1cghr7F9eR978Ff9QbiXvr3dzd/XyC4n+7mbxrDPXUn/0hn6rLWXfwfbOr+uoNH7QCd5924Q2d5z+qMzvFP0Bn+GTrNP0XfUzyDs1tmqlP83OqWTvDP0nHebzAeOsq7qlN6auj7PcWHVyd1hJ87GEyHvAMP0wHvVd1bt3mv6v66xRM4PRiHPuV9cKy6oe/3JI/jX9FNPhQf9QelGzxm9zhdvdY/SX3kMRytbg0mLS4fpD7wQOarj/owGgQf+G8wKG4PJk3zLaN3PI279DS7MHrLh+HGYKrycj3sGyQ178Lp6mmeZ8d//3snU319IGwct/W8OP7iInB7wLnB1Cnin0wEavO4qfO8QGiIczrHiy2SjU/1QS/iH128dIAz1Wt94H10P3ysbra3AnUSJ6sXRZb46ZvNjOrFLsPbC9Lmq1s6wQvK9sLzHq+C8QKnR9yvOsELW7Vsn+qdjgwH10mcHkylZ5GXDnGrOjaYrErV/tiE1tc0zlev+aOpH4G+9sCx6q2eJSZu62sUx+cCB1OXT45GBGlDnNswnR7HE17gMoez1ae8ACqJW9WRNW11gyf0BY1zgykaPZa8PhNvq8dRJBl9weGONW31nkd0FA+oXutRjOqLhRfOTT1qA/WFC/etHkVJYugLW64+W4IM1bvskLFHvZ4oJRZ4ynNISlC91hNJ6PrtNSRvJRxMHUo//BOSQ2mvKaMvlypcR6pjer184d2x6nDu7eZQh5cA/KXS4ZoCfdh66u9bSP5qDDd0a2frMih4dSngkYEHdLwA+kM6HNPp/TVdU05PA3C0OqOnKJ7zuF2d0Kvv0XKI9gheHdWrttnnKSSfGq2O6M0s9OElJIcSrW7r/aSDz+qIRyNu6uY6fkFPTD1FM0NHqtN68NyR6pQuT3v6PyMg+5OycF7PtVZaKa3aX2NUl+GD5ppReHVct57NRQEugP6QWqfUqq6gntsJwK3qtg5o1B5wonqPj7qFBt7vlA7bNvjHISQfGsVJPfS5CpeU1QPPKlr9mTqsTujFDB3BMb3efMH3jJ/ebe3Meq3DkY1EcVMvzAznJTEiydh4rxdsdmYycETBFTCtzuu7ubhLt2aCjcWNa0L3WdURJ+ZC6bvSvSNfL9JVHdPrGZfu0/Qy6ASO6N0Khuj2yhgPR2Gx4TpYduPJK3ZoSvcN/GrpcC6k7vP0WEkXTuk7j6ed5ObC6+bRtM6nsc8dOKVndmbhqA5owoa4U4e0G6eqmzrm2nYYrgRlonYY7tTjABxW53Xa9sM5Pf4azuk2PbE53KyO6kAmiztwoGMyWdx41mJzqfSEZaEdgiuxjBiXtd14Ie4ywMaLE0NX+i4eyt/2xTu9PInb2ZcmpkLi6nwT4qLDbS9crYQQ1zNYVyDPwfX5Wr8n8vusHDJtM83P3Ss018tZyYhwQ/FWL8+r6/Dy0u1xz6VMmp/uV/9XosIjL6dD4/4Pif39/I3bc9UAAAAASUVORK5CYII="
        height="300"
        width="550"
        objectFit="contain"
      />
      <Button
        className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        LogIn
      </Button>
    </div>
  );
}

export default Login;
