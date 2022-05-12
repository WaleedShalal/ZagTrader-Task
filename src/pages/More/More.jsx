import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../components/useWindowSize/useWindowSize";
function More() {
  const navigate = useNavigate();
  const windowSize = useWindowSize();
  useEffect(() => {
    if (windowSize.width >= 992) navigate("/mainpage/dashboard");
  }, [navigate, windowSize]);
}

export default More;
