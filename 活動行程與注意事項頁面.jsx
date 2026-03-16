import { useMemo, useState } from "react";
import {
  BedDouble,
  CalendarDays,
  Car,
  House,
  MapPin,
  PartyPopper,
  Search,
  ShieldAlert,
  Sparkles,
  Users,
} from "lucide-react";

type ScheduleItem = {
  time: string;
  title: string;
  detail: string;
};

type CarItem = {
  id: number;
  driver: string;
  location: string;
  passengers: string[];
};

type BedItem = {
  building: "A棟" | "B棟";
  floor: string;
  room: string;
  people: string[];
};

export default function EventInfoPage() {
  const [tab, setTab] = useState<"schedule" | "notice" | "car" | "bed" | "team">("schedule");
  const [carSearch, setCarSearch] = useState("");
  const [bedSearch, setBedSearch] = useState("");

  const heroImage =
    "https://raw.githubusercontent.com/kodada55123/kodada55123.github.io/a3de853fe1dafa0afe5dbd3d19beb4dcd226d6ae/ChatGPT%20Image%202025%E5%B9%B411%E6%9C%8816%E6%97%A5%20%E4%B8%8B%E5%8D%8810_29_37.png";

  const schedule: ScheduleItem[] = [
    { time: "3/28 11:15", title: "福哥石窯雞羅東店 吃中餐", detail: "https://maps.app.goo.gl/rZBhn9SpTKiesr1B9" },
    { time: "3/28 13:00", title: "新動市集", detail: "https://maps.app.goo.gl/Xq77Prub4FEQn8rc6" },
    { time: "3/28 15:00", title: "預計入住", detail: "若可以提早會在群組與大家通知" },
    { time: "3/28 15:00-15:20", title: "前往放行李", detail: "先到房間放置行李" },
    { time: "3/28 15:20-15:30", title: "組長集合組員", detail: "各組長找到所有組員" },
    { time: "3/28 15:30-17:00", title: "闖關遊戲", detail: "開始跑遊戲" },
    { time: "3/28 17:00-18:00", title: "解謎遊戲", detail: "解謎遊戲開跑～～" },
    { time: "3/28 18:00", title: "頒獎與點心", detail: "吃飯前小點" },
    { time: "3/28 18:15", title: "烤肉與火鍋", detail: "準備烤肉與火鍋用餐" },
    { time: "3/28 19:30", title: "收拾與慶生", detail: "吃完收拾，後慶生" },
    { time: "3/29 09:30", title: "早餐", detail: "免費早餐" },
    { time: "3/29 11:00", title: "退房", detail: "整理行李" },
    { time: "3/29 11:20", title: "宜蘭頭等倉 Heads Up", detail: "https://maps.app.goo.gl/MkAyJVhtQU9ogL1z7" },
    { time: "3/29 15:00", title: "活動結束", detail: "安全返家" },
  ];

  const cars: CarItem[] = [
    { id: 1, driver: "小柯", location: "桃園八德", passengers: ["彥霖", "阿杰（宜蘭）", "Ren"] },
    { id: 2, driver: "Statham", location: "新北新店", passengers: ["Tyler", "WADEEE（宜蘭）", "唐唐"] },
    { id: 3, driver: "游承", location: "桃園八德", passengers: ["林湯", "Charlie（三重）", "萬（三重）"] },
    { id: 4, driver: "堯", location: "新北板橋", passengers: ["小温", "Leo"] },
    { id: 5, driver: "Zack", location: "新竹市關新路", passengers: ["豪", "小豪", "丁丁"] },
    { id: 6, driver: "蔡旻諺", location: "新竹市", passengers: ["阿虎", "Lai", "Sean"] },
    { id: 7, driver: "Timmy", location: "台北車站", passengers: ["張智翔", "科良", "Hao"] },
    { id: 8, driver: "吳炫", location: "新北土城", passengers: ["Paper", "nick", "偉傑"] },
    { id: 9, driver: "陳肉粽♉️", location: "新北三重", passengers: ["ShihChe 陳世哲", "瑋Ming", "李庭州"] },
    { id: 10, driver: "Horus", location: "竹南（到新竹）", passengers: ["周建宏", "鉦倫（竹南）"] },
    { id: 11, driver: "Ming", location: "台北大直", passengers: ["小黑", "Chung", "Asics Cu"] },
    { id: 12, driver: "黑黑", location: "台北市", passengers: ["JL Y.", "Hung Yi Huang", "舜凱"] },
    { id: 13, driver: "盧敬文", location: "台北市", passengers: ["蕭又瑋", "岳彤 Gaku", "漢克"] },
    { id: 14, driver: "黃寯寬", location: "北投明德站", passengers: ["Koma", "Y.H.wang（南港）", "JKK（明德）"] },
  ];

  const beds: BedItem[] = [
    { building: "A棟", floor: "2樓", room: "城堡四人房", people: ["小豪", "Zack", "萬", "Charlie"] },
    { building: "A棟", floor: "2樓", room: "時尚雙人房", people: ["堯", "小温", "周建宏"] },
    { building: "A棟", floor: "2樓", room: "愛戀雙人房", people: ["李庭州", "丁丁", "Y.H.wang", "蕭又瑋"] },
    { building: "A棟", floor: "3樓", room: "地中海四人房", people: ["Sean", "蔡旻諺", "岳彤 Gaku", "漢克", "Lai", "阿虎"] },
    { building: "A棟", floor: "3樓", room: "普普風四人房", people: ["偉傑", "陳肉粽♉️", "Koma", "小黑"] },
    { building: "A棟", floor: "3樓", room: "經典雙人房", people: ["吳炫", "Paper", "nick"] },
    { building: "B棟", floor: "2樓", room: "城堡四人房", people: ["彥霖", "小柯", "唐唐", "阿杰"] },
    { building: "B棟", floor: "2樓", room: "時尚雙人房", people: ["Ming", "豪", "JKK"] },
    { building: "B棟", floor: "2樓", room: "紫色雙人房", people: ["Ren", "Horus", "瑋Ming", "Leo"] },
    { building: "B棟", floor: "3樓", room: "地中海四人房", people: ["Asics Cu", "Chung", "張智翔", "Timmy", "科良", "Hao"] },
    { building: "B棟", floor: "3樓", room: "普普風四人房", people: ["鉦倫", "ShihChe 陳世哲", "WADEEE", "舜凱"] },
    { building: "B棟", floor: "3樓", room: "經典雙人房", people: ["JL Y.", "黑黑", "Hung Yi Huang"] },
    { building: "B棟", floor: "4樓", room: "小木屋四人房", people: ["游承", "林湯", "盧敬文", "黃寯寬"] },
    { building: "B棟", floor: "4樓", room: "小木屋雙人房", people: ["Statham", "Tyler"] },
  ];

  const tabButtonClass = (id: string) =>
    `flex items-center justify-center gap-1 rounded-2xl px-2 py-3 text-xs font-black transition-all ${
      tab === id
        ? "bg-slate-800 text-white shadow-lg shadow-slate-200"
        : "bg-white text-slate-700 ring-1 ring-slate-200"
    }`;

  const normalizedCarSearch = carSearch.trim().toLowerCase();
  const normalizedBedSearch = bedSearch.trim().toLowerCase();

  const filteredCars = useMemo(() => {
    if (!normalizedCarSearch) return cars;
    return cars.filter((car) => {
      const driverMatch = car.driver.toLowerCase().includes(normalizedCarSearch);
      const locationMatch = car.location.toLowerCase().includes(normalizedCarSearch);
      const passengerMatch = car.passengers.some((p) => p.toLowerCase().includes(normalizedCarSearch));
      return driverMatch || locationMatch || passengerMatch;
    });
  }, [cars, normalizedCarSearch]);

  const filteredABeds = useMemo(() => {
    const list = beds.filter((room) => room.building === "A棟");
    if (!normalizedBedSearch) return list;
    return list.filter(
      (room) =>
        room.room.toLowerCase().includes(normalizedBedSearch) ||
        room.people.some((person) => person.toLowerCase().includes(normalizedBedSearch)) ||
        room.floor.toLowerCase().includes(normalizedBedSearch),
    );
  }, [beds, normalizedBedSearch]);

  const filteredBBeds = useMemo(() => {
    const list = beds.filter((room) => room.building === "B棟");
    if (!normalizedBedSearch) return list;
    return list.filter(
      (room) =>
        room.room.toLowerCase().includes(normalizedBedSearch) ||
        room.people.some((person) => person.toLowerCase().includes(normalizedBedSearch)) ||
        room.floor.toLowerCase().includes(normalizedBedSearch),
    );
  }, [beds, normalizedBedSearch]);

  const day1Schedule = schedule.filter((item) => item.time.startsWith("3/28"));
  const day2Schedule = schedule.filter((item) => item.time.startsWith("3/29"));

  const renderTimeline = (items: ScheduleItem[], dayPrefix: string, markerClass: string) => (
    <div className="relative space-y-5 pl-6">
      <div className="absolute bottom-0 left-2 top-0 w-[2px] bg-slate-200" />
      {items.map((item, i) => {
        const isLink = item.detail.startsWith("http");
        return (
          <div key={`${dayPrefix}-${item.time}-${i}`} className="relative">
            <div className={`absolute -left-[11px] top-2 h-5 w-5 rounded-full ${markerClass}`} />
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-bold text-slate-500">{item.time.replace(`${dayPrefix} `, "")}</div>
              <div className="mt-1 text-lg font-black text-slate-900">{item.title}</div>
              {isLink ? (
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <a
                    href={item.detail}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700 ring-1 ring-slate-200"
                  >
                    <MapPin className="h-4 w-4" />
                    導航
                  </a>
                  {item.title.includes("Heads Up") && (
                    <span className="rounded-full bg-stone-200 px-3 py-1 text-xs font-black text-stone-700">自費</span>
                  )}
                </div>
              ) : (
                <div className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderRoomSection = (title: string, rooms: BedItem[], accent: string) => (
    <div>
      <div className="mb-3 flex items-center gap-2 text-lg font-black text-slate-800">
        <House className="h-4 w-4" />
        {title}
      </div>
      <div className="space-y-3">
        {rooms.length === 0 ? (
          <div className="rounded-[1.5rem] border border-dashed border-slate-200 bg-white p-5 text-center text-sm text-neutral-500">
            {title}沒有符合的結果
          </div>
        ) : (
          rooms.map((room, i) => (
            <div key={`${title}-${room.room}-${i}`} className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className={`inline-block rounded-full px-3 py-1 text-xs font-black ${accent}`}>{room.floor}</div>
              <div className="mt-3 text-lg font-black text-slate-900">{room.room}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {room.people.map((person, idx) => (
                  <span
                    key={`${room.room}-${person}-${idx}`}
                    className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-neutral-700 ring-1 ring-slate-200 shadow-sm"
                  >
                    {person}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-stone-50 to-zinc-100 text-slate-800">
      <div className="mx-auto max-w-md px-3 py-4 md:max-w-lg">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 shadow-2xl shadow-slate-200/70 backdrop-blur">
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-stone-600 px-5 pb-6 pt-6 text-white">
            <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-slate-300/20 blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="mx-auto text-xs font-bold tracking-[0.35em] text-slate-200">EVENT GUIDE</div>

              <div className="mt-4 flex items-center justify-center gap-4">
                <img src={heroImage} alt="羊圖示" className="h-16 w-16 object-contain" />
                <div className="text-left">
                  <h1 className="text-4xl font-black tracking-wide drop-shadow-sm">羊聚醉樂園</h1>
                  <p className="mt-2 text-sm font-semibold text-slate-200">03/28（六）－03/29（日）</p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/KH5P84pawvgUQmJa9"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-slate-700 shadow-lg"
              >
                <MapPin className="h-3.5 w-3.5" />
                民宿地址｜點擊導航
              </a>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 bg-gradient-to-r from-slate-50 to-stone-100 p-3">
            <button onClick={() => setTab("schedule")} className={tabButtonClass("schedule")}>
              <CalendarDays className="h-4 w-4" />
              行程
            </button>
            <button onClick={() => setTab("notice")} className={tabButtonClass("notice")}>
              <ShieldAlert className="h-4 w-4" />
              注意
            </button>
            <button onClick={() => setTab("car")} className={tabButtonClass("car")}>
              <Car className="h-4 w-4" />
              汽車
            </button>
            <button onClick={() => setTab("bed")} className={tabButtonClass("bed")}>
              <BedDouble className="h-4 w-4" />
              床位
            </button>
            <button onClick={() => setTab("team")} className={tabButtonClass("team")}>
              <Users className="h-4 w-4" />
              分組
            </button>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 p-4">
            <div className="relative z-10 space-y-4">
              {tab === "schedule" && (
                <div className="space-y-6">
                  <div className="rounded-[1.5rem] bg-slate-800 p-4 text-white shadow-lg">
                    <div className="text-xs font-black tracking-[0.2em] text-slate-300">DAY 1</div>
                    <div className="mt-1 text-3xl font-black">3/28</div>
                  </div>
                  {renderTimeline(day1Schedule, "3/28", "bg-slate-800")}

                  <div className="rounded-[1.5rem] bg-stone-200 p-4 text-slate-900 shadow-lg shadow-slate-200">
                    <div className="text-xs font-black tracking-[0.2em] text-neutral-700">DAY 2</div>
                    <div className="mt-1 text-3xl font-black">3/29</div>
                  </div>
                  {renderTimeline(day2Schedule, "3/29", "bg-stone-600")}
                </div>
              )}

              {tab === "notice" && (
                <div className="space-y-5">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-slate-700">
                      <MapPin className="h-5 w-5" />
                      <div className="text-base font-black">集合與行程提醒</div>
                    </div>
                    <ul className="mt-3 space-y-3 text-sm leading-6 text-neutral-700">
                      <li>• 11:15 在福哥石窯雞門口集合（宜蘭縣五結鄉國民中路12-16號）</li>
                      <li>• 到場後請先找桌長報到，再依安排入座，請勿自行亂坐</li>
                      <li>• 中餐結束後可至新動市集散步，等待民宿入住</li>
                    </ul>
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-stone-50 p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-stone-700">
                      <ShieldAlert className="h-5 w-5" />
                      <div className="text-base font-black">安全與活動規範</div>
                    </div>
                    <ul className="mt-3 space-y-3 text-sm leading-6 text-neutral-700">
                      <li>• 本活動無保險，請小心駕駛</li>
                      <li>• 乘客請協助注意周邊安全並協助司機保持精神，乘客請勿睡覺</li>
                      <li>• 本活動嚴禁毒品，若有使用非法藥物屬於個人行為</li>
                      <li>• 禁止性騷擾，可以調情但請尊重界線，如有不舒服請私下告知主辦人</li>
                      <li>• 請理性飲酒，切勿有任何酒後失序或暴力行為</li>
                      <li>• 希望大家多在公共空間互動，不要一直待在房間休息</li>
                    </ul>
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-zinc-50 p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-slate-700">
                      <House className="h-5 w-5" />
                      <div className="text-base font-black">住宿與設備提醒</div>
                    </div>
                    <ul className="mt-3 space-y-3 text-sm leading-6 text-neutral-700">
                      <li>• 民宿僅提供洗髮精、沐浴乳與大小毛巾，其餘個人備品請自行準備</li>
                      <li>• 唱歌時間為 08:00–22:00，請務必遵守時間規定，超時會被開罰</li>
                      <li>• 現場提供免洗餐具，每人一組（杯子、碗、筷子）</li>
                    </ul>
                  </div>
                </div>
              )}

              {tab === "car" && (
                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-sm font-black text-slate-700">
                      <Search className="h-4 w-4" />
                      搜尋汽車名單
                    </div>
                    <input
                      value={carSearch}
                      onChange={(e) => setCarSearch(e.target.value)}
                      placeholder="輸入人名、司機或上車地點"
                      className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                    />
                  </div>

                  {filteredCars.length === 0 ? (
                    <div className="rounded-[1.5rem] border border-dashed border-slate-200 bg-white p-5 text-center text-sm text-neutral-500">
                      查無符合的人名或地點
                    </div>
                  ) : (
                    filteredCars.map((car) => (
                      <div key={car.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-bold text-slate-500">🚗 第{car.id}車</div>
                          <div className="rounded-full bg-slate-800 px-2 py-1 text-xs font-black text-white">司機</div>
                        </div>

                        <div className="mt-2 text-xl font-black text-slate-900">{car.driver}</div>
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <MapPin className="h-4 w-4" />
                          {car.location}
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-2">
                          {car.passengers.map((p, i) => (
                            <div key={`${car.id}-${p}-${i}`} className="rounded-lg bg-slate-100 py-2 text-center text-sm font-semibold">
                              {p}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {tab === "bed" && (
                <div className="space-y-6">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-sm font-black text-slate-700">
                      <Search className="h-4 w-4" />
                      搜尋床位名單
                    </div>
                    <input
                      value={bedSearch}
                      onChange={(e) => setBedSearch(e.target.value)}
                      placeholder="輸入人名、房型或樓層"
                      className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                    />
                  </div>

                  {renderRoomSection("A棟房間", filteredABeds, "bg-slate-100 text-slate-700")}
                  {renderRoomSection("B棟房間", filteredBBeds, "bg-stone-100 text-stone-700")}
                </div>
              )}

              {tab === "team" && (
                <div className="space-y-4">
                  <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-white shadow-lg">
                      <PartyPopper className="h-7 w-7" />
                    </div>
                    <div className="mt-4 text-2xl font-black text-neutral-900">遊戲分組</div>
                    <div className="mt-2 text-sm leading-6 text-neutral-700">
                      分組名單將在 <span className="font-black text-slate-800">活動當日</span> 公布！
                    </div>
                    <div className="mt-2 text-sm leading-6 text-neutral-700">保留一點神秘感與驚喜感 ✨</div>
                    <div className="mt-1 text-sm leading-6 text-neutral-700">大家一起期待一下吧，現場見 😆</div>
                  </div>

                  <div className="rounded-[1.5rem] border border-dashed border-slate-200 bg-white p-4 text-center text-sm font-medium text-slate-500">
                    當天現場公布分組，請留意主持人說明 📢
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
