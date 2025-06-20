import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, AlertTriangle, Send, Users, Shield, LogIn, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function EmergencyApp() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const isManager = user === "admin";

  const handleLogin = () => {
    if (user === "admin") return;
    const username = prompt("أدخل اسم المستخدم");
    const password = prompt("أدخل كلمة المرور");
    if (username === "admin" && password === "1234") {
      setUser("admin");
    } else {
      setUser("user");
    }
  };

  return (
    <div className="grid gap-4 p-4 max-w-xl mx-auto">
      <motion.h1
        className="text-2xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        جاهزون – نظام التواصل في حالات الطوارئ
      </motion.h1>

      {!user && (
        <Card className="rounded-2xl shadow-md">
          <CardContent className="space-y-4 p-4 text-center">
            <Button className="w-full flex gap-2" onClick={handleLogin}>
              <LogIn className="w-4 h-4" /> تسجيل الدخول
            </Button>
          </CardContent>
        </Card>
      )}

      {user && (
        <>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="space-y-4 p-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                <h2 className="font-semibold">إرسال بلاغ طارئ</h2>
              </div>
              <Input placeholder="نوع الحادث (حريق، إصابة...)" />
              <Textarea placeholder="وصف الحادث" rows={3} />
              <Input type="file" />
              <Button className="w-full flex gap-2">
                <Send className="w-4 h-4" /> إرسال البلاغ
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="space-y-4 p-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <h2 className="font-semibold">تحديد الموقع</h2>
              </div>
              <Button className="w-full">📍 استخدام موقعي الحالي</Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="space-y-4 p-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                <h2 className="font-semibold">رسالة فورية</h2>
              </div>
              <Textarea
                placeholder="اكتب رسالتك هنا..."
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button className="w-full flex gap-2">
                <Send className="w-4 h-4" /> إرسال الرسالة
              </Button>
            </CardContent>
          </Card>
        </>
      )}

      {isManager && (
        <Card className="rounded-2xl shadow-md">
          <CardContent className="space-y-4 p-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <h2 className="font-semibold">واجهة المدير</h2>
            </div>
            <Button variant="outline" className="w-full flex gap-2">
              <Users className="w-4 h-4" /> إدارة المستخدمين
            </Button>
            <Button variant="outline" className="w-full flex gap-2">
              <AlertTriangle className="w-4 h-4" /> عرض جميع البلاغات
            </Button>
          </CardContent>
        </Card>
      )}

      <Card className="rounded-2xl shadow-md">
        <CardContent className="text-center">
          <p className="text-sm text-gray-600">يتم إرسال البلاغ إلى مركز السيطرة مع جميع التفاصيل.</p>
        </CardContent>
      </Card>
    </div>
  );
}
