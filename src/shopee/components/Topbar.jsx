import React from "react";
import {
  FacebookOutlined,
  Instagram,
  NotificationsNone,
  HelpOutlineOutlined,
  Language,
  ShoppingCartOutlined,
  ArrowBackIos,
  ArrowForwardIos,
  SearchOutlined,
  LanguageOutlined,
} from "@mui/icons-material/";
const Topbar = () => {
  return (
    <div className="bg-[rgb(247,69,46)] text-white px-20 text-xs">
      <div className="navbar flex justify-between py-2">
        <div className="flex items-center">
          <div className="">賣家中心 | 下載 | 追蹤我們</div>
          <div>
            <FacebookOutlined sx={{ fontSize: 18 }} className="mx-2" />
            <Instagram sx={{ fontSize: 18 }} />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-3">
            <NotificationsNone sx={{ fontSize: 18 }} />
            <span className="mx-1">通知總覽</span>{" "}
            <HelpOutlineOutlined sx={{ fontSize: 18 }} />{" "}
            <span className="mx-1">幫助中心</span>
            <LanguageOutlined sx={{ fontSize: 18 }} />
            <span className="mx-1">繁體中文</span>
            <svg
              viewBox="0 0 12 12"
              fill="none"
              width="12"
              height="12"
              color="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 8.146L11.146 3l.707.707-5.146 5.147a1 1 0 01-1.414 0L.146 3.707.854 3 6 8.146z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </div>
          <span>註冊 | 登入</span>
        </div>
      </div>
      <div className="searchBar flex justify-between mt-4 items-center">
        <div className="icon w-[200px] text-white mb-5">
          <svg
            stroke=""
            fill="currentColor"
            viewBox="0 0 180 45"
            className="shopee-svg-icon header-with-search__shopee-logo icon-shopee-logo text-white"
          >
            <g fill-rule="evenodd">
              <path d="M48.9738506 30.8384949h1.6597547V18.4469308h-1.6597547v12.3915641zm5.6176455 0h-1.6597548v-12.393904c0-.00036.9953021-.0010799.9995249-.0010799.37473 0 .6602299.2453294.6602299.7093493v11.6856346zm2.298136 7.1761096c0-.6220531-.5350138-1.1235114-1.1697231-1.1235114-.6345257 0-1.1284129.5014583-1.1284129 1.1235114h2.298136zm-2.298136 0v1.6688878h-1.6597548v-6.5920349h3.9578908V18.4373912c0-1.2442861-1.0200882-2.2436029-2.2891396-2.2436029h-1.6687512V13.263695c0-.6222331-.5144505-1.1265713-1.1491598-1.1265713-.6345257 0-1.1489762.5043382-1.1489762 1.1265713v2.9300933h-2.8291107c-.6345257 0-1.1289637.5037982-1.1289637 1.1260313v15.7716378h3.9580744v6.5920349h-2.8291107c-.6345257 0-1.1489762.5043382-1.1489762 1.1265713s.5144505 1.1263912 1.1489762 1.1263912h9.0851375v-3.9218503h-2.298136zM77.0568562 23.5752508h-8.4280937V21.295298h6.186023v-3.6311305c0-.6295052-.5018598-1.1398853-1.1208562-1.1398853h-5.0651668v-2.280135h6.186023c1.2456943 0 2.2420707 1.0274997 2.2420707 2.2866923v7.0444113zM75.3982846 29.9705644c-.0085463.4253518-.376584 2.4494337-2.3726066 4.8310787-1.8125493-2.5389149-2.111489-4.8368634-2.111489-4.8368634l-2.2609588-.0030731s.2343876 3.1235252 2.8173794 6.4442704c-1.3630487 1.2288745-2.4807995 2.3760411-4.9488705 3.5631578l.9437331 1.9595469c2.6489985-1.2728016 3.9424037-2.5242725 5.4669235-3.8937861 1.5328843 1.4882795 2.7679199 2.7938006 5.5843901 3.9015592l.9480971-1.9597277c-2.5942657-.9260848-3.6374634-2.1104899-5.006149-3.4823536 3.1379577-3.583404 3.2770629-6.9158993 3.2336039-7.6521756.0009091-.0245847 0 .0249463 0 0 0-1.2496631-1.0190135-2.2569136-2.2760513-2.2569136h-6.8054243v2.262879h5.6902191-.0005455c.5900605.0168117 1.0973852.5130254 1.0973852 1.1224011"></path>
              <path d="M64.6659177 21.3565449h-3.9984832v-4.7555786h2.8621812c.6313394 0 1.136302.5101812 1.136302 1.1361971v3.6193815zm2.2729673-4.6143255v-.2189604c0-1.2551183-1.00702-2.2725757-2.2622543-2.2725757l-6.2819819-.0065361v27.6923076h2.2727857v-7.3649464h7.6603247s-.767703-1.1826763-1.0522324-2.2727573h-6.6080923V29.058102h6.2714505v-2.2725757h-6.2714505v-3.2404676h6.2714505v-6.8028393zM114.080268 40.5213981l1.538247 1.4150567c2.257084-2.1754078 3.192812-3.6525872 3.578809-4.5150501h-2.463233c-.896832 1.6384378-2.653823 3.0999934-2.653823 3.0999934M123.165574 37.4214047h-2.463233c.385997.8622769 1.321541 2.3394563 3.57881 4.5150501l1.538247-1.4150567s-1.756991-1.4615556-2.653824-3.0999934M122.345529 20.3979348h-4.791574v-4.4899241l3.647943-.0019912c.623766 0 1.143631.5166408 1.143631 1.1391804v3.3527349zm-4.791574 6.7557944h4.791574v-4.4899241h-4.791574v4.4899241zm0 6.7977918h4.791574v-4.5319215h-4.791574v4.5319215zm-2.269674 2.2658703h9.331104v-2.2238728l-.018314-18.1695026c-.033365-1.2168395-1.035742-2.1818754-2.268224-2.1818754h-5.906737c-.626667 0-1.134746.5034261-1.134746 1.1328446h-.003083v21.4424062zM137.369985 34.6935851v-2.2581497h5.460081v2.2581497h-5.460081zm-7.794182-1.2657329v-.9924168h5.543333v2.2581497h-5.543333v-1.2657329zm0-3.2505665h5.543333v-2.2164758h-5.543333v2.2164758zm7.794182 0v-2.2164758h4.334656v-.0005412h.007192c.611531 0 1.118233.497381 1.118233 1.1107636v1.1062534h-5.460081zm7.71075-2.2164758c0-1.2410172-1.002795-2.2581497-2.239701-2.2581497h-.010968l-14.379507-.020386c-.625196.0019845-1.126144.5143393-1.126144 1.1336753l.000719 14.819502h2.250669v-4.6837167h13.254263v.179685c0 1.2471509-.999559 2.2520158-2.242578 2.2520158-.002698 0-.005395-.0001804-.008092-.0001804v2.2025845c.083252.0046906.157693.0072162.240405.0072162 2.359454 0 4.263811-1.9191656 4.263811-4.2864613 0-.0530396-.000899-.1058987-.002877-.1585774v-9.1872073zM133.102833 17.8988968h6.473456v-1.4528387h-6.473456v1.4528387zm0 3.7358707h6.473456v-1.4943841h-6.473456v1.4943841zm13.485796 1.116356c0-.6178101-.502851-1.1229818-1.123711-1.1251307v.0087747h-3.633459v-1.4943841h2.247962c.622843 0 1.127675-.5017692 1.127675-1.1206538 0-.6190636-.504832-1.1208328-1.127675-1.1208328h-2.247962v-1.4528387h3.007013v-.0195192c.626446-.0012535 1.125332-.5024855 1.125332-1.1206538 0-.6181682-.498886-1.1195793-1.125332-1.1206537v.019161h-3.007013v-1.2476182c0-.6188846-.504833-1.1206538-1.127495-1.1206538-.622843 0-1.127675.5017692-1.127675 1.1206538v1.2476182h-6.473276v-1.2476182c0-.6188846-.504832-1.1206538-1.127675-1.1206538-.622662 0-1.127494.5017692-1.127494 1.1206538v1.2476182h-3.101241c-.622663 0-1.127675.5019483-1.127675 1.1208329 0 .6190636.505012 1.1208328 1.127675 1.1208328h3.101241v1.4528387h-2.228505c-.622662 0-1.127495.5017692-1.127495 1.1208328 0 .6188846.504833 1.1206538 1.127495 1.1206538h2.228505v1.4943841h-3.599768c-.622842 0-1.127675.5017693-1.127675 1.1206538 0 .6190636.504833 1.1208329 1.127675 1.1208329h18.216842-.003964.001802c.621941 0 1.125873-.5067834 1.125873-1.1251307zM145.232308 21.9197324h0M145.235619 21.9197324h-.00301.00301zM161.638796 28.5415035l-1.749072-1.4838237s-.761409.841475-2.111483 1.9826288v-7.9191827h3.459737v-2.251728h-3.459737v-5.9074135c0-.6216625-.510215-1.125864-1.139291-1.125864-.629259 0-1.139291.5042015-1.139291 1.125864v5.9074135h-1.974783c.072628-.8754722.114494-1.8570731.114494-2.8888603 0 0-.000546.0037775-.001638.0039574.001092-.019427.001638-.037235.001638-.0568419 0-.6218424-.510215-1.1247847-1.139291-1.1247847-.629258 0-1.139291.513735-1.139291 1.1353976 0 .0289606.001457.0541436.003823.0958756h-.003823s.270307 5.48074-2.364132 11.280046l1.876671 1.1010407s1.633305-2.374046 2.389616-7.2941024h2.236716v9.6507c-1.68773 1.158782-3.805584 2.3556983-6.247805 3.2101246l1.0035 1.8547346s2.290959-.7036875 5.244305-2.4481562v8.2469226h2.278582v-9.7368621c1.265797-.9260183 2.605861-2.0373121 3.860555-3.3570859"></path>
              <path d="M177.716693 33.0822562v.0417211c-.024806 3.4517058-2.88505 6.241448-6.384431 6.2545758v2.2568984C176.106267 41.6203456 180 37.8003427 180 33.0901688V18.925299c0-.0435195-.005654-.0872188-.005654-.1312777 0-1.8646837-1.537648-3.3830098-3.429156-3.3830098-.044688 0-.09339-.003237-.137531-.003237h-10.478806c.084452-.7840699.127134-1.6001499.115825-2.4460822 0-.6216811-.51109-1.1255719-1.141653-1.1255719-.630381 0-1.141289.5123429-1.141289 1.1338442 0 .0039563.000183.0199614.000183.0199614h-.001095c.000912.1251634.309719 6.7158462-4.040566 12.2178228l1.67226 1.2320328s2.97461-3.3756366 4.167519-8.7810432h2.356814c-.388698 2.9560873-1.989457 10.562824-8.405078 15.5758359l1.37914 1.7305286s7.819022-4.2208496 9.400629-17.3063645h2.763935c-.021341 2.2732632-.659383 14.4945029-11.662959 22.0037703l1.253649 1.7305285s11.990917-6.2642867 12.769773-23.7342988h1.1391c.634394.008632 1.123048.5152203 1.130344 1.1255719l.011309 3.1945453v11.1034006zM87.1355173 16.4222147h8.8877074v6.0210526h-9.9993702l-.0113712-4.8985201c0-.6210637.4907633-1.1225325 1.1181607-1.1225325m20.356299 6.0210526h-9.2044743v-6.0210526h9.0562893c.125443 0 .534442.0315673.511339.3436324 0 0 .006498.4787403-.868537 1.67505l1.782018 1.4787918s1.286381-1.7044527 1.575713-2.9602893c0 0 .300522-1.1705147-.10595-1.8548933-.584982-.9266349-2.019548-.9401638-2.019548-.9401638h-9.9313243v-1.1993762c0-.6234087-.5055638-1.1288459-1.1295318-1.1288459-.6239679 0-1.1297122.5054372-1.1297122 1.1288459v1.1993762h-8.8902343c-1.8717233 0-3.3685604 1.5462555-3.3685604 3.4168423v4.0676694h-.0133566l.0119126 5.5874084c0 8.8511043-3.395093 12.7430793-3.395093 12.7430793l1.7805738 1.5316443c4.1334941-4.7033442 3.849938-12.6306997 3.849938-12.6306997l.0081222-4.179147H106.291892c1.404424 0 .907524 1.1315517.907524 1.1315517-1.740323 3.6764155-5.097513 6.2607836-8.4350282 8.4075389-3.4950867-2.1725503-6.4647553-4.3541199-8.7499904-8.4100643h-2.3191681s1.6009822 4.8880579 8.993116 9.6639166c-5.565534 2.8111114-10.9383003 4.0290672-10.9383003 4.0290672l.8275652 2.1114c5.8608222-1.5157706 9.3995885-3.0573361 12.1988707-4.7751372 3.3638671 1.952842 7.5637831 3.6562124 13.1776901 4.7760391l.62108-2.1099569s-5.731408-.8800958-11.677424-4.023836c8.871283-5.6297988 8.821106-10.8005191 8.821106-10.8005191h-.009747c-.001444-1.2125443-.995064-2.2578722-2.228741-2.2578722M25.914134 32.7635637c-.249117 2.0382156-1.4950636 3.6705591-3.4249956 4.4880861-1.0746788.4552057-2.5177827.7009698-3.659991.6239878-1.7820188-.0675851-3.4559541-.4971301-4.9989944-1.282491-.5512798-.2804602-1.3730398-.8410192-2.0039791-1.3659785-.1598621-.1326403-.1788717-.2175735-.0731419-.3662969.05721-.0854754.1623968-.2392586.3952197-.577365.3374665-.4900825.3796498-.5517042.4176691-.6091696.1079024-.1642644.2833343-.1785404.4564126-.0435509.0182855.0140953.0182855.0140953.0320449.0247571.0282429.0216851.0282429.0216851.0952293.0733678.0678916.0522249.1080834.0831261.1243774.0954143 1.6639779 1.2918879 3.6022379 2.0371314 5.5589643 2.1115835 2.7221817-.0366839 4.6798134-1.2501442 5.0304962-3.1132529.3858053-2.0506845-1.2379807-3.8218124-4.4149456-4.8090251-.993571-.3088315-3.5050171-1.3052603-3.9679473-1.5745165-2.1747038-1.2646009-3.1914485-2.92134-3.0467941-4.9675068.2214172-2.8364068 2.8776987-4.9519659 6.2338974-4.9658804 1.5010381-.0030721 2.9988173.3059401 4.4377572.9071586.5094586.2128751 1.4192061.7034997 1.7331368.9358914.1808633.1317368.216529.2851586.1129717.4508687-.0579342.0957757-.1537066.2481133-.3552089.5652574l-.0023536.0036142c-.265773.4179796-.27392.4309907-.3349319.5287542-.1051867.1588431-.2288399.1738419-.4189364.0543934-1.5396005-1.0253423-3.2464859-1.5412662-5.123734-1.5784922-2.3371005.0459-4.0887038 1.4245282-4.204029 3.3028164-.0304154 1.6964951 1.2530074 2.9348932 4.0255194 3.8790971 5.6279422 1.792813 7.7816449 3.8946381 7.3762868 7.2084778M18.9638444 3.47806106c3.6639739 0 6.6506613 3.44702216 6.7904275 7.76162774h-13.580674c.1395851-4.31460558 3.1262725-7.76162774 6.7902465-7.76162774m18.962577 8.57282994c0-.4479773-.36408-.8112022-.8128888-.8112022h-8.8025535C28.0948122 5.54266018 23.9927111 1 18.9638444 1c-5.0288668 0-9.1309679 4.54266018-9.34713476 10.2396888l-8.8150456.0001807c-.44192907.0079512-.79786211.3679233-.79786211.8110215 0 .0211429.00090522.0421052.00235358.0628867H0l1.25662829 27.4585357c0 .0762592.00289671.1534219.00869013.230946.00126731.0175288.00271566.0348768.00416402.0522249l.00271566.0580075.00289671.0030721c.1910017 1.9106351 1.58974975 3.4493714 3.49198192 3.5203899l.00434506.0043371H32.7338906c.0132163.0001807.0264325.0001807.0398298.0001807.0132162 0 .0264324 0 .0396487-.0001807h.0595635l.0012674-.0010843c1.9351822-.0524056 3.5028445-1.6128269 3.6685-3.5471349l.0009053-.0009035.0012673-.0260221c.0016294-.0202394.0030777-.0406595.004345-.0608989.0030778-.0487914.0050693-.0972214.0057934-.1456514l1.3712294-27.566961h-.0009053c.0007242-.0137339.0010863-.0278292.0010863-.0417438"></path>
            </g>
          </svg>
        </div>
        <div className="searchInput w-full mx-5">
          <div className="flex justify-center  items-center bg-white rounded-sm">
            <input className=" w-full h-8 " />
            <div className=" bg-orange-600 mr-1 py-1 px-3 my-1 rounded-sm">
              <SearchOutlined />
            </div>
          </div>
          <div className="my-2 flex">
            {[
              "口罩",
              "手機殼",
              "藍芽耳機",
              "水壺",
              "萬聖節",
              "拖鞋",
              "襪子",
              "安全帽",
            ].map((item) => (
              <div className="mr-2">{item}</div>
            ))}
          </div>
        </div>
        <div className="cart w-[40px] text-white">
          <svg
            viewBox="0 0 26.6 25.6"
            className="shopee-svg-icon navbar__link-icon icon-shopping-cart-2"
          >
            <polyline
              fill="none"
              stroke="currentColor"
              points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2.5"
            ></polyline>
            <circle
              cx="10.7"
              cy="23"
              r="2.2"
              stroke="currentColor"
              fill="currentColor"
            ></circle>
            <circle
              cx="19.7"
              cy="23"
              r="2.2"
              stroke="currentColor"
              fill="currentColor"
            ></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
