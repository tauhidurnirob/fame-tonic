"use client";
import { Box } from "@mui/material";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Box sx={{ background: "#000000" }}>
      <Banner />
      <Box maxWidth={"1240px"} mx={"auto"} px={3}>
        <Header />
        <Hero />
      </Box>
    </Box>
  );
}
