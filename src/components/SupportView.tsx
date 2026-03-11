import React from "react";
import { motion } from "motion/react";
import { 
  ChevronRight, 
  Mail, 
  ArrowLeft, 
  ShieldCheck, 
  CreditCard, 
  HelpCircle,
  ExternalLink,
  LifeBuoy
} from "lucide-react";
import { Link } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import appIconImg from "figma:asset/a6e3345cd45e404589b7bc418717209251fdcb62.png";

export const SupportView = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-600"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-4xl mx-auto px-6 h-full flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 group transition-all"
          >
            <ArrowLeft size={20} className="text-slate-400 group-hover:text-slate-900 group-hover:-translate-x-1 transition-all" />
            <span className="text-slate-500 font-medium group-hover:text-slate-900">返回首页</span>
          </Link>
          <div className="flex items-center gap-2">
            <img src={appIconImg} alt="Logo" className="w-8 h-8 rounded-lg shadow-sm" />
            <span className="font-bold text-slate-900 tracking-tight">DeviceFinder</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl shadow-xl shadow-blue-500/20 mb-6 text-white"
            >
              <LifeBuoy size={32} />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              技术支持中心
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              DeviceFinder 为您提供专业的蓝牙信号追踪支持。如果您在使用过程中遇到任何信号定位、订阅购买或设备兼容性问题，我们随时为您提供帮助。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">邮件支持</h3>
              <p className="text-slate-500 text-sm mb-4">通常在 24 小时内回复</p>
              <a 
                href="mailto:contact@andpods.cn" 
                className="text-blue-600 font-bold hover:underline"
              >
                contact@andpods.cn
              </a>
            </motion.div>

            {/* Privacy Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">隐私政策</h3>
              <p className="text-slate-500 text-sm mb-4">了解我们如何保护您的数据</p>
              <a 
                href="https://pij00bdj9a.feishu.cn/wiki/VvcWwTlsiiOd88kfrKBcaAPDn6e?from=from_copylink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-bold flex items-center gap-1 hover:underline"
              >
                查看文档 <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Billing Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <CreditCard size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">订阅与账单</h3>
              <p className="text-slate-500 text-sm mb-4">管理您的订阅与退款指引</p>
              <a 
                href="#billing" 
                className="text-purple-600 font-bold hover:underline"
              >
                立即查看
              </a>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center">
                <HelpCircle size={18} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">常见问题 (FAQ)</h2>
            </div>
            
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-2 md:p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b-slate-100">
                  <AccordionTrigger className="px-4 py-6 text-left font-bold text-slate-900 hover:no-underline">
                    为什么雷达扫描不到我的设备？
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-6 text-slate-500 leading-relaxed">
                    请确保您的手机蓝牙已开启，且被查找设备处于开机状态。蓝牙信号传输距离有限，请尝试在不同房间移动，或确保设备不在金属屏蔽层内。
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b-slate-100">
                  <AccordionTrigger className="px-4 py-6 text-left font-bold text-slate-900 hover:no-underline">
                    为什么信号强度一直在跳动？
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-6 text-slate-500 leading-relaxed">
                    蓝牙信号（RSSI）非常敏感，会受到墙壁、家具甚至是人体的遮挡。这是正常现象。我们建议根据信号的“平均趋势”来判断距离，当数值越接近 0 (如 -30 dBm) 时，说明距离越近。
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b-slate-100">
                  <AccordionTrigger className="px-4 py-6 text-left font-bold text-slate-900 hover:no-underline">
                    支持哪些蓝牙设备？
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-6 text-slate-500 leading-relaxed">
                    DeviceFinder 支持绝大部分低功耗蓝牙 (BLE) 设备。包括但不限于：AirPods 系列、Apple Watch、iPad、蓝牙音箱、运动手环，以及部分带有寻物功能的第三方标签。
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b-slate-100">
                  <AccordionTrigger className="px-4 py-6 text-left font-bold text-slate-900 hover:no-underline">
                    最后位置记录准确吗？
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-6 text-slate-500 leading-relaxed">
                    当 App 检测到设备信号消失时，会自动记录当前的 GPS 坐标。这能帮您确定是在哪家咖啡馆或公园丢失的，但受限于手机 GPS 精度，室内定位可能会有几米的偏差。
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-0">
                  <AccordionTrigger className="px-4 py-6 text-left font-bold text-slate-900 hover:no-underline">
                    我需要注册账号吗？
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-6 text-slate-500 leading-relaxed">
                    不需要。DeviceFinder 坚持“本地优先”的隐私原则，我们不收集也不上传您的任何位置数据或设备信息。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Billing & Subscription Section */}
          <section id="billing" className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center">
                <CreditCard size={18} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">订阅、恢复购买与退款</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ChevronRight size={18} className="text-blue-600" />
                  订阅与恢复购买
                </h3>
                <ul className="space-y-4">
                  <li className="text-slate-500 text-sm leading-relaxed">
                    <strong className="text-slate-900 block mb-1">如何订阅：</strong>
                    在 App 内点击“升级专业版”，选择适合您的订阅方案（月度/年度）或终身买断方案即可。
                  </li>
                  <li className="text-slate-500 text-sm leading-relaxed">
                    <strong className="text-slate-900 block mb-1">恢复购买：</strong>
                    如果您更换了设备或重装了 App，只需在设置页面点击“恢复购买”，使用相同的 Apple ID 或 Google 账号即可找回所有权益。
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ChevronRight size={18} className="text-blue-600" />
                  退款指引
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  DeviceFinder 的所有支付均通过 Apple App Store 或 Google Play 商店的安全结算系统完成。我们无权直接处理退款。
                </p>
                <div className="space-y-3">
                  <a 
                    href="https://support.apple.com/zh-cn/HT204084"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors group"
                  >
                    <span className="text-xs font-bold text-slate-700">Apple 退款申请</span>
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-slate-900" />
                  </a>
                  <a 
                    href="https://support.google.com/googleplay/answer/2479637"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors group"
                  >
                    <span className="text-xs font-bold text-slate-700">Google Play 退款申请</span>
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-slate-900" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Info */}
          <div className="text-center pt-8 border-t border-slate-200 text-slate-400 text-sm">
            <p>© 2026 DeviceFinder Inc. 保留所有权利.</p>
            <p className="mt-2">极简设计，专注查找。</p>
          </div>
        </div>
      </main>
    </motion.div>
  );
};
