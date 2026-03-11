import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import {
  X,
  Menu,
  ChevronRight,
  Apple,
  Zap,
  MapPin,
  Shield,
  Star,
  ArrowRight,
  Smartphone,
  Tablet,
  Watch,
  Headphones,
  Radio,
  LifeBuoy,
  CreditCard,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";

// Re-import images for realistic display
import tabletImg from "figma:asset/a782784e125de2b7440c1d9566a09541a48dd1f4.png";
import watchImg from "figma:asset/02ed7c750b176545caca5edd798f6a8530714e26.png";
import phoneImg from "figma:asset/a6cf038e5fa431e200ae3df0d7638d9d31ef83d3.png";
import twsImg from "figma:asset/042e5c8562ae313144f63fa176309909e43b62b7.png";
import appIconImg from "figma:asset/a6e3345cd45e404589b7bc418717209251fdcb62.png";
import screenshotList from "figma:asset/4ca88d93f01102da5f4d5c0847da23c7a30f5625.png";
import screenshotScan from "figma:asset/41bf9db34092f220661dcf59ccd66d3d4b2cf7ed.png";
import screenshotModels from "figma:asset/fb1da9c245d0baba1fde68171f0457ef5aa9616a.png";
import screenshotSignal from "figma:asset/4c1358f2f5686ce646384ae0d3398513fcd8bfa8.png";
import screenshotMapNew from "figma:asset/8c4d803662944fec99a5346783d546095d9e7211.png";

// Replaced Figma screenshots with Unsplash images
// const screenshotScan = "https://images.unsplash.com/photo-1569862308326-a4af4bde55f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
// const screenshotList = "https://images.unsplash.com/photo-1657561758945-c8d9687ee951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
// const screenshotDetail = "https://images.unsplash.com/photo-1623824204241-f851d3bcfaf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
// const screenshotModels = "https://images.unsplash.com/photo-1591174425156-fd472f354be4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
// const screenshotMap = "https://images.unsplash.com/photo-1640592273609-5be93dc51683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const RadarVisual = () => {
  return (
    // Removing absolute inset-0 to prevent layout collapse issues on mobile
    // Using direct flex positioning instead
    <div className="relative flex items-center justify-center w-full h-full pointer-events-none">
      {/* Radar Waves Container - Responsive Square */}
      <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute border border-blue-500/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 box-border"
            initial={{ width: "0%", height: "0%", opacity: 0 }}
            animate={{
              width: ["0%", "100%"],
              height: ["0%", "100%"],
              opacity: [0, 0.5, 0],
              borderWidth: ["2px", "1px", "0px"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: (i - 1) * 1.5,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Center Icon */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(24,104,255,0.5)] z-20 ring-4 sm:ring-8 ring-white overflow-hidden"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={appIconImg}
            alt="Center Radar"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>
      </div>
    </div>
  );
};

// Single Discovery Card Component
const DiscoveryCard = ({
  item,
  style,
}: {
  item: any;
  style: any;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -10 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="absolute z-30 text-left"
      style={{
        ...style,
        // Ensure card centers vertically on its anchor point
        transform: "translateY(-50%)",
      }}
    >
      <div className="bg-white/95 backdrop-blur-xl p-2.5 pr-4 rounded-[18px] shadow-[0_15px_30px_-8px_rgba(0,0,0,0.08)] flex items-center gap-3 border border-white/60 ring-1 ring-slate-100 min-w-[140px] max-w-[180px]">
        <div
          className={`w-10 h-10 ${item.bg} rounded-full flex items-center justify-center shrink-0 overflow-hidden relative`}
        >
          {/* Image handling with fallback */}
          {item.img ? (
            <img
              src={item.img}
              alt={item.name}
              className="w-7 h-7 object-contain drop-shadow-sm"
            />
          ) : (
            <item.icon size={18} className={item.color} />
          )}
        </div>
        <div className="overflow-hidden flex flex-col items-start">
          <div className="font-bold text-slate-900 text-[13px] whitespace-nowrap leading-tight mb-1 tracking-tight">
            {item.name}
          </div>
          <div className="flex items-center gap-2">
            {/* Signal Bars - Explicit styling to ensure visibility */}
            <div className="flex items-end gap-[3px] h-3.5 pb-[1px]">
              <motion.div
                animate={{ height: ["40%", "100%", "60%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`w-[3px] rounded-full ${item.barColor}`}
              />
              <motion.div
                animate={{ height: ["100%", "40%", "80%"] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className={`w-[3px] rounded-full ${item.barColor}`}
              />
              <motion.div
                animate={{ height: ["60%", "80%", "30%"] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className={`w-[3px] rounded-full ${item.barColor}`}
              />
            </div>
            <div className="text-[10px] font-bold text-slate-400 tabular-nums tracking-wide whitespace-nowrap">
              {item.signal}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MultiDiscoverySystem = () => {
  // Data source - Added explicit barColor to ensure Tailwind generates the classes
  const devices = [
    {
      id: 1,
      name: "AirPods Pro",
      img: twsImg,
      color: "text-green-500",
      barColor: "bg-green-500",
      bg: "bg-green-50",
      signal: "-32 dBm",
    },
    {
      id: 2,
      name: "iPad Air",
      img: tabletImg,
      color: "text-blue-500",
      barColor: "bg-blue-500",
      bg: "bg-blue-50",
      signal: "-45 dBm",
    },
    {
      id: 3,
      name: "Apple Watch",
      img: watchImg,
      color: "text-orange-500",
      barColor: "bg-orange-500",
      bg: "bg-orange-50",
      signal: "-28 dBm",
    },
    {
      id: 4,
      name: "iPhone 15",
      img: phoneImg,
      color: "text-indigo-500",
      barColor: "bg-indigo-500",
      bg: "bg-indigo-50",
      signal: "-38 dBm",
    },
    {
      id: 5,
      name: "AirTag",
      icon: Radio,
      color: "text-slate-500",
      barColor: "bg-slate-500",
      bg: "bg-slate-100",
      signal: "-64 dBm",
    },
  ];

  // CRITICAL: New Positioning System using Calc
  // We anchor cards strictly OUTSIDE the center zone (100px radius safe zone)

  // Left Zone: Anchored from RIGHT side.
  // right: '50%' means card right edge is at center.
  // right: 'calc(50% + 60px)' means card right edge is 60px LEFT of center. Safe!
  const leftPositions = [
    { right: "calc(50% + 60px)", top: "30%" },
    { right: "calc(50% + 80px)", top: "70%" },
    { right: "calc(50% + 50px)", top: "20%" },
  ];

  // Right Zone: Anchored from LEFT side.
  // left: 'calc(50% + 60px)' means card left edge is 60px RIGHT of center. Safe!
  const rightPositions = [
    { left: "calc(50% + 60px)", top: "25%" },
    { left: "calc(50% + 70px)", top: "75%" },
    { left: "calc(50% + 50px)", top: "40%" },
  ];

  // State for two independent cards
  const [card1, setCard1] = useState({
    show: false,
    item: devices[0],
    pos: leftPositions[0],
  });
  const [card2, setCard2] = useState({
    show: false,
    item: devices[1],
    pos: rightPositions[0],
  });

  // Card 1 Loop (Left Zone)
  useEffect(() => {
    const runLoop = () => {
      const randomDevice =
        devices[Math.floor(Math.random() * devices.length)];
      const randomPos =
        leftPositions[
          Math.floor(Math.random() * leftPositions.length)
        ];
      setCard1({
        show: true,
        item: randomDevice,
        pos: randomPos,
      });

      setTimeout(() => {
        setCard1((prev) => ({ ...prev, show: false }));
      }, 4000);
    };

    runLoop();
    const interval = setInterval(runLoop, 5500);
    return () => clearInterval(interval);
  }, []);

  // Card 2 Loop (Right Zone)
  useEffect(() => {
    let interval: NodeJS.Timeout;

    const runLoop = () => {
      const randomDevice =
        devices[Math.floor(Math.random() * devices.length)];
      const randomPos =
        rightPositions[
          Math.floor(Math.random() * rightPositions.length)
        ];
      setCard2({
        show: true,
        item: randomDevice,
        pos: randomPos,
      });

      setTimeout(() => {
        setCard2((prev) => ({ ...prev, show: false }));
      }, 4000);
    };

    const timer = setTimeout(() => {
      runLoop();
      interval = setInterval(runLoop, 5500);
    }, 2500);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <AnimatePresence>
        {card1.show && (
          <DiscoveryCard
            key="card1"
            item={card1.item}
            style={card1.pos}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {card2.show && (
          <DiscoveryCard
            key="card2"
            item={card2.item}
            style={card2.pos}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export const WebsiteView = () => {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    React.useState(false);
  const [api, setApi] = React.useState<CarouselApi>();
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 1]); // 背景透明度随滚动化
  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 4px 6px -1px rgb(0 0 0 / 0.1)"],
  );

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 w-full h-full bg-white z-[9999] overflow-y-auto overflow-x-hidden"
    >
      {/* Global Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-[400px] left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      {/* Responsive Navigation Bar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-transparent"
        style={{
          backgroundColor:
            scrollY.get() > 20
              ? "rgba(255, 255, 255, 0.9)"
              : "transparent",
          borderBottomColor:
            scrollY.get() > 20
              ? "rgba(226, 232, 240, 0.8)"
              : "transparent",
          boxShadow:
            scrollY.get() > 20
              ? "0 4px 6px -1px rgb(0 0 0 / 0.05)"
              : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo Area - Clicks to close/home */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img
              src={appIconImg}
              alt="Logo"
              className="w-10 h-10 rounded-xl shadow-sm group-hover:scale-105 transition-transform"
            />
            <span className="font-bold text-xl text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
              DeviceFinder
            </span>
          </div>

          {/* Desktop Menu - Removed from top as requested */}
          <div className="hidden md:flex items-center gap-8">
          </div>

          {/* Desktop CTA & Close */}
          <div className="hidden md:flex items-center gap-4">
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-b border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <div className="flex flex-col gap-3">
                <button className="w-full h-12 rounded-xl bg-slate-900 text-white font-bold">
                  免费下载 App
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-32 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-20">
          <div className="flex-1 relative z-10 text-center lg:text-left mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6 lg:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-bold text-blue-600 tracking-wide">
                全新 v1.0 正式发布
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 whitespace-nowrap sm:whitespace-normal"
            >
              信号指引，
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                精准触达。
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-10"
            >
              专业的全能级蓝牙设备追踪器。
              <br className="hidden sm:block" />
              利用专业级信号分析技术，精准定位丢失的耳机、手表、手环及各类低功耗蓝牙设备。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button className="h-14 px-8 rounded-full bg-slate-900 text-white font-bold text-[15px] flex items-center gap-3 shadow-xl shadow-slate-900/20 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto justify-center">
                <Apple
                  size={20}
                  fill="currentColor"
                  className="mb-0.5"
                />
                <span>App Store 下载</span>
              </button>
              <button className="h-14 px-8 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-[15px] flex items-center gap-3 hover:bg-slate-50 hover:border-slate-300 transition-all w-full sm:w-auto justify-center">
                <Smartphone
                  size={20}
                  className="text-slate-900"
                />
                <span>Android 下载</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="relative flex-1 flex items-center justify-center h-[420px] lg:h-auto lg:min-h-[500px] w-full mt-4 lg:mt-0"
          >
            {/* Background Glows for context */}
            <div className="absolute inset-0 bg-blue-500/5 blur-[80px] rounded-full scale-75 pointer-events-none" />

            <div className="relative w-full max-w-[800px] h-full flex items-center justify-center">
              <RadarVisual />

              {/* Decorative Elements floating around radar */}
              <MultiDiscoverySystem />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              为什么选择 DeviceFinder？
            </h2>
            <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
              三大核心优势，重新定义查找体验。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={24} />,
                color: "text-blue-500 bg-blue-50",
                title: "精准定位",
                desc: "通过专业级 dBm 信号分析,实时将不可见的蓝牙信号转化为可视化的仪表盘读数。",
              },
              {
                icon: <MapPin size={24} />,
                color: "text-emerald-500 bg-emerald-50",
                title: "智能历史回溯",
                desc: "自动记录设备最后出现的时刻与地点。忘记东西放在哪了？打开时间轴一查便知。",
              },
              {
                icon: <Shield size={24} />,
                color: "text-purple-500 bg-purple-50",
                title: "隐私优先设计",
                desc: "您的数据仅保留在本地。我们无需注册账号,不上传任何位置信息,安全无忧。",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm text-justify">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* App Screenshots Section */}
      <div className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                支持数千款蓝牙设备
              </h2>
              <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
                精心设计的用户界面，将复杂的信号分析转化为直观的视觉指引，轻松查找身边的各种电子设备。
              </p>
            </motion.div>
          </div>

          <div className="relative w-full py-10">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full focus:outline-none"
            >
              <CarouselContent className="-ml-6 py-10 px-6 md:px-0">
                {[
                  { img: screenshotList, alt: "Device List View" },
                  { img: screenshotScan, alt: "Radar Scan View" },
                  { img: screenshotSignal, alt: "Signal Strength View" },
                  { img: screenshotMapNew, alt: "Map Tracking View" },
                  { img: screenshotModels, alt: "Supported Models View" },
                  { img: screenshotList, alt: "Device List View" },
                  { img: screenshotScan, alt: "Radar Scan View" },
                  { img: screenshotSignal, alt: "Signal Strength View" },
                  { img: screenshotMapNew, alt: "Map Tracking View" },
                  { img: screenshotModels, alt: "Supported Models View" },
                  { img: screenshotList, alt: "Device List View" },
                  { img: screenshotScan, alt: "Radar Scan View" },
                  { img: screenshotSignal, alt: "Signal Strength View" },
                  { img: screenshotMapNew, alt: "Map Tracking View" },
                  { img: screenshotModels, alt: "Supported Models View" },
                ].map((screen, index) => (
                  <CarouselItem key={index} className="pl-6 basis-[85%] sm:basis-[320px] md:basis-[360px] transition-transform duration-300 hover:scale-[1.01]">
                    <div className="relative group">
                      <img 
                          src={screen.img} 
                          className="w-full h-auto block drop-shadow-2xl border-[6px] md:border-[8px] border-white rounded-[32px] md:rounded-[40px] select-none pointer-events-none" 
                          alt={screen.alt}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            用户好评如潮
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            来自全球用户的真实反馈
          </p>
        </div>

        <div className="relative w-full">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max px-6"
            animate={{ x: "-50%" }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[
              {
                text: "我以为我的 Apple Watch 掉在公园草丛里永远找不到了。用 DeviceFinder 顺着信号强弱走，2分钟就翻出来了。绝对的神器！",
                author: "Sarah Jenkins",
                role: "摄影师",
                bg: "bg-blue-100",
              },
              {
                text: "界面太美了，简直就是原生应用的体验。用来找家里的 AirPods 甚至比系统自带的还要快，雷达扫描界面非常有科技感。",
                author: "Mike Chen",
                role: "UI 设计师",
                bg: "bg-orange-100",
              },
              {
                text: "对于经常乱放东西的人来说是救命稻草。不仅能找蓝牙设备，我还在钥匙扣上挂了个 AirTag，这下全都管理起来了。",
                author: "Jessica Lee",
                role: "产品经理",
                bg: "bg-green-100",
              },
              {
                text: "信号分析功能非常专业，能看到具体的 dBm 数值，对于我们这种极客来说很有用。不仅仅是查找，更是调试工具。",
                author: "David Wu",
                role: "软件工程师",
                bg: "bg-purple-100",
              },
              {
                text: "简单易用，老爸老妈都会用。以前他们老是找不到老花镜（挂了追踪器），现在自己拿手机一扫就找到了。",
                author: "Emily Zhang",
                role: "教师",
                bg: "bg-pink-100",
              },
              // Duplicate for infinite loop
              {
                text: "我以为我的 Apple Watch 掉在公园草丛里永远找不到了。用 DeviceFinder 顺着信号强弱走，2分钟就翻出来了。绝对的神器！",
                author: "Sarah Jenkins",
                role: "摄影师",
                bg: "bg-blue-100",
              },
              {
                text: "界面太美了，简直就是原生应用的体验。用来找家里的 AirPods 甚至比系统自带的还要快，雷达扫描界面非常有科技感。",
                author: "Mike Chen",
                role: "UI 设计师",
                bg: "bg-orange-100",
              },
              {
                text: "对于经常乱放东西的人来说是救命稻草。不仅能找蓝牙设备，我还在钥匙扣上挂了个 AirTag，这下全都管理起来了。",
                author: "Jessica Lee",
                role: "产品经理",
                bg: "bg-green-100",
              },
              {
                text: "信号分析功能非常专业，能看到具体的 dBm 数值，对于我们这种极客来说很有用。不仅仅是查找，更是调试工具。",
                author: "David Wu",
                role: "软件工程师",
                bg: "bg-purple-100",
              },
              {
                text: "简单易用，老爸老妈都会用。以前他们老是找不到老花镜（挂了追踪器），现在自己拿手机一扫就找到了。",
                author: "Emily Zhang",
                role: "教师",
                bg: "bg-pink-100",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="w-[350px] md:w-[400px] p-8 rounded-3xl bg-white shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${review.bg} flex items-center justify-center font-bold text-slate-700 text-sm`}
                  >
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">
                      {review.author}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {review.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* New Support Entry Module */}
      <div className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header to match other modules */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                技术支持
              </h2>
              <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
                在使用 DeviceFinder 的过程中遇到任何困惑，或者有好的功能建议，欢迎随时与我沟通。
              </p>
            </motion.div>
          </div>

          <div className="bg-[#1c1c1e] rounded-[40px] p-8 md:p-16 border border-slate-800/50 flex flex-col lg:flex-row items-stretch gap-12 overflow-hidden relative group shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-500">
            {/* Subtle Ambient Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center z-10 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6">
                <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs font-bold text-white/80 tracking-wide uppercase">帮助中心</span>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight tracking-tight">
                遇到困难？
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  看看这里是否有你的答案。
                </span>
              </h3>
              
              <p className="text-slate-400 font-medium text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                我整理了一些大家最常遇到的操作问题和解决方法。如果这些都帮不到你，可以直接给我发邮件。
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link 
                  to="/support" 
                  className="h-14 px-8 rounded-full bg-white text-slate-900 font-bold text-[15px] flex items-center gap-2 hover:bg-slate-100 active:scale-95 transition-all w-full sm:w-auto justify-center"
                >
                  <LifeBuoy size={20} className="text-slate-900" />
                  <span>查看帮助文档</span>
                </Link>
                <a 
                  href="mailto:contact@andpods.cn"
                  className="h-14 px-8 rounded-full bg-white/5 border border-white/10 text-white font-bold text-[15px] flex items-center gap-2 hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
                >
                  <span>发送邮件</span>
                </a>
              </div>
            </div>

            {/* Right Quick Tiles */}
            <div className="flex-1 lg:max-w-[420px] relative z-10 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { 
                    q: "扫描不到设备", 
                    desc: "排查连接问题", 
                    icon: <Zap size={20} />, 
                    color: "text-amber-400 bg-amber-400/10" 
                  },
                  { 
                    q: "恢复订阅", 
                    desc: "找回高级权益", 
                    icon: <CreditCard size={20} />, 
                    color: "text-blue-400 bg-blue-400/10" 
                  },
                  { 
                    q: "信号含义", 
                    desc: "读懂 RSSI 数值", 
                    icon: <Radio size={20} />, 
                    color: "text-emerald-400 bg-emerald-400/10" 
                  },
                  { 
                    q: "隐私政策", 
                    desc: "数据安全说明", 
                    icon: <Shield size={20} />, 
                    color: "text-purple-400 bg-purple-400/10" 
                  }
                ].map((item, i) => (
                  <Link 
                    key={i}
                    to="/support"
                    className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/5 hover:border-white/20 p-5 rounded-3xl transition-all duration-300 flex flex-col gap-4 overflow-hidden"
                  >
                    <div className="flex justify-between items-start">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${item.color}`}>
                        {item.icon}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <ChevronRight size={16} className="text-white/40 group-hover:text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-[15px] mb-1">{item.q}</h3>
                      <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-slate-900 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            准备好不再丢三落四了吗？
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            加入 50,000+ 用户行列，体验更智能的物品管理。
          </p>
          <button className="h-16 px-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg flex items-center justify-center gap-3 mx-auto transition-colors w-full sm:w-auto">
            <span>免费开始使用</span>
            <ArrowRight size={20} />
          </button>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-slate-500 text-sm font-medium">
            <Link
              to="/support"
              className="hover:text-white transition-colors"
            >
              技术支持
            </Link>
            <a
              href="https://pij00bdj9a.feishu.cn/wiki/VvcWwTlsiiOd88kfrKBcaAPDn6e?from=from_copylink"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              隐私政策
            </a>
            <a
              href="https://pij00bdj9a.feishu.cn/wiki/FeGZwFX2aivcF6kqeaxcgRFkn6f?from=from_copylink"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              服务条款
            </a>
            <a
              href="https://pij00bdj9a.feishu.cn/wiki/YBL9wnExWie3WykBe49cGZHYnNi?from=from_copylink"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              联系我们
            </a>
          </div>
          <div className="mt-8 text-slate-600 text-xs">
            © 2026 DeviceFinder Inc. 保留所有权利.
          </div>
        </div>
      </div>
    </motion.div>
  );
};