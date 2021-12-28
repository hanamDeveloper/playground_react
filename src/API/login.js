const { naver } = window;

export const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "dS2nATRETwvggMrrtjA3",
      callbackUrl: "http://localhost:3000/login",
      isPopup: false,
      loginButton: { color: "white", type: 1, height: "47" },
      callbackHandle: true
    });
    naverLogin.init();
  };