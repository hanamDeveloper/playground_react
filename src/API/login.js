const { naver, Kakao } = window;

export const initializeNaverLogin = () => {
  const naverLogin = new naver.LoginWithNaverId({
    clientId: "개인 네이버 값",
    callbackUrl: "http://localhost:3000/login",
    isPopup: false,
    loginButton: { color: "white", type: 1, height: "47", width: "200" },
    callbackHandle: true,
  });
  naverLogin.init();
};

export const initializeKakaoLogin = async () => {
  Kakao.init("개인 카카오 값");
  Kakao.Auth.login({
    success: (res) => Kakao.Auth.setAccessToken(res.access_token),
  });
};

export const getKakaoProfile = async (setKakaoName) => {
  try {
    const response = await Kakao.API.request({
      url: "/v2/user/me",
    });
    setKakaoName(response.properties.nickname);
  } catch (e) {
    console.error("실패", e);
  }
};
