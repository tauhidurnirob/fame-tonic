import { Box, Typography } from "@mui/material";
import CustomButton from "./CustomButton";

const Hero = () => {
  const features = [
    "Start growing your influence right away—no waiting required!",
    "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    "Use a Personal AI Worker to boost your content",
    "Learn from expert-led courses designed for aspiring influencers",
  ];

  return (
    <Box
      display={"flex"}
      mt={8}
      flexDirection={{ xs: "column-reverse", md: "row" }}
    >
      <Box zIndex={1} maxWidth={"530px"}>
        <Typography variant="h1">
          Want to Turn Social Media Into a Profitable Career?{" "}
        </Typography>
        <Typography
          variant="h1"
          color="primary.main"
          sx={{
            textShadow: (theme) =>
              `0px 4px 4px ${theme.palette.secondary.main}`,
          }}
        >
          Discover your way to success with Fametonic:
        </Typography>
        <Box component="ul" mt={3}>
          {features.map((feature, index) => (
            <Box
              component="li"
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                listStyle: "none",
                gap: 1,
              }}
            >
              <Typography fontSize={"22px"}>✨</Typography>
              <Typography fontSize={"16px"} fontWeight={600}>
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          display={{ xs: "block", md: "none" }}
          textAlign={"center"}
          color="grey.100"
          mt={5}
        >
          <Typography fontWeight={500} fontSize={"16px"}>
            By clicking "Get Started", you agree with Terms and Conditions,
            Privacy Policy, Subscription Terms
          </Typography>
          <Typography fontWeight={500} fontSize={"12px"} mt={2}>
            Fametonic 2025 ©All Rights Reserved.
          </Typography>
        </Box>
        <Box mt={4} maxWidth={{ xs: "100%", MD: "313px" }}>
          <CustomButton text="Get Started" />
          <Typography
            fontSize={"12px"}
            fontWeight={400}
            textAlign={"center"}
            mt={2}
          >
            1-minute quiz for personalized Insights
          </Typography>
        </Box>
        <Box display={{ xs: "none", md: "block" }} color="grey.100" mt={5}>
          <Typography fontWeight={500} fontSize={"16px"}>
            By clicking "Get Started", you agree with Terms and Conditions,
            Privacy Policy, Subscription Terms
          </Typography>
          <Typography fontWeight={500} fontSize={"12px"} mt={2}>
            Fametonic 2025 ©All Rights Reserved.
          </Typography>
        </Box>
      </Box>
      <Box
        maxWidth={"666px"}
        component={"img"}
        src="/hero-phone.png"
        alt="Image"
        sx={{ transform: { xs: "scale(1)", md: "scale(1.2)" } }}
      ></Box>
    </Box>
  );
};

export default Hero;
