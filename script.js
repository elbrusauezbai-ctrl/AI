const rawData = `
<question1>Жасанды интеллекттің негізгі мақсаты қандай?</question1>
<variantright>Адам ойлауын модельдеу</variantright>
<variant>Деректерді сақтау</variant>
<variant>Құрылғыларды басқару</variant>
<variant>Желі жылдамдығын арттыру</variant>
<variant>Қолданбаларды жаңарту</variant>

<question2>Интеллектуалды жүйе нені білдіреді?</question2>
<variantright>Ақылды мінез-құлықты іске асыратын жүйе</variantright>
<variant>Тек деректер жинайтын бағдарлама</variant>
<variant>Қарапайым есептеу құралы</variant>
<variant>Бос инфрақұрылым</variant>
<variant>Құжат сақтайтын сервер</variant>

<question3>Білім дегеніміз не?</question3>
<variantright>Пәндік аймақтың формалды сипаттамасы</variantright>
<variant>Компьютер жылдамдығы</variant>
<variant>Төмен деңгейлі ақпарат</variant>
<variant>Қосымшаны орнату нұсқаулығы</variant>
<variant>Жүйе логотипі</variant>

<question4>Инференция дегеніміз не?</question4>
<variantright>Жаңа білім шығару процесі</variantright>
<variant>Деректерді көшіру</variant>
<variant>Құжатты сақтау</variant>
<variant>Кодты орындау</variant>
<variant>Файлдарды индекслеу</variant>

<question5>Машиналық оқыту мақсаты:</question5>
<variantright>Деректер арқылы алгоритмдерді үйрету</variantright>
<variant>Қолмен есептеулерді арттыру</variant>
<variant>Құрылғыны басқару</variant>
<variant>Желіні баптау</variant>
<variant>Файлдық жүйені ұйымдастыру</variant>

<question6>Эксперттік жүйе қандай?</question6>
<variantright>Мамандардың ойлауын модельдейтін жүйе</variantright>
<variant>Видео өңдеу жүйесі</variant>
<variant>Жүйелік драйвер</variant>
<variant>Қарапайым графикалық интерфейс</variant>
<variant>Желілік хаттама</variant>

<question7>Семантикалық желі қалай сипатталады?</question7>
<variantright>Түйіндер мен байланыстардан тұратын граф</variantright>
<variant>Таблица түріндегі деректер</variant>
<variant>Жолдық мәтін</variant>
<variant>Мультимедиа объектілері</variant>
<variant>Кездейсоқ файлдар жиыны</variant>

<question8>Фрейм дегеніміз не?</question8>
<variantright>Объектінің құрылымдалған моделі</variantright>
<variant>Анимация элементі</variant>
<variant>Тек сурет форматы</variant>
<variant>Желі протоколы</variant>
<variant>Құжат үлгісі</variant>

<question9>Продукциялық ережелер нені қолданады?</question9>
<variantright>«Егер – онда» құрылымы</variantright>
<variant>Графикалық символдар</variant>
<variant>Аудио жазбалар</variant>
<variant>Тригонометриялық формулалар</variant>
<variant>Мәтіндік шаблондар</variant>

<question10>Онтология нені сипаттайды?</question10>
<variantright>Пәндік аймақтың ұғымдары мен байланыстары</variantright>
<variant>Пайдаланушы профилі</variant>
<variant>Файл аттары</variant>
<variant>Деректер жолдары</variant>
<variant>Бағдарлама нұсқалары</variant>

<question11>Машиналық оқытудың қандай түрі бар?</question11>
<variantright>Оқытушысы бар оқыту</variantright>
<variant>Қолмен кодтау</variant>
<variant>Желі диагностикасы</variant>
<variant>Құрылғыны баптау</variant>
<variant>Мәтінді аудару</variant>

<question12>Терең оқыту қандай модельдерді қолданады?</question12>
<variantright>Нейрондық желілер</variantright>
<variant>Мәтіндік үлгілер</variant>
<variant>Кесте формулалары</variant>
<variant>Аудио эффектілер</variant>
<variant>Графикалық фильтрлер</variant>

<question13>Интеллектуалды агенттің міндеті:</question13>
<variantright>Қабылдау, шешім қабылдау және әрекет ету</variantright>
<variant>Трафикті өлшеу</variant>
<variant>Деректерді шифрлау</variant>
<variant>Файлдарды бөлу</variant>
<variant>Құжаттарды синхрондау</variant>

<question14>Компьютерлік көру қайда қолданылады?</question14>
<variantright>Суреттер мен бейнелерді талдауда</variantright>
<variant>Музыка өңдеуде</variant>
<variant>Құрылғыны салқындатуда</variant>
<variant>Желіні қорғауда</variant>
<variant>Қойма есебінде</variant>

<question15>Табиғи тілді өңдеу міндеті:</question15>
<variantright>Адам тілін түсіну және өңдеу</variantright>
<variant>Құжаттарды сығу</variant>
<variant>Әуен құрастыру</variant>
<variant>Видео редакциялау</variant>
<variant>Дисплейді басқару</variant>

<question16>ЖИ этикасы қандай мәселелерді қарастырады?</question16>
<variantright>Әділдік, қауіпсіздік, ашықтық</variantright>
<variant>Файл өлшемін азайту</variant>
<variant>Анимация сапасын арттыру</variant>
<variant>Бағдарлама орнату</variant>
<variant>Деректерді жою</variant>

<question17>Тьюринг тестінің мақсаты:</question17>
<variantright>Машинаның ақылды әрекетін бағалау</variantright>
<variant>Желі қателерін табу</variant>
<variant>Процессор жылдамдығын тексеру</variant>
<variant>Файл кодтау деңгейін анықтау</variant>
<variant>Бағдарламаны жаңарту</variant>

<question18>Эксперттік жүйенің жұмыс принципі:</question18>
<variantright>Маман білімін пайдалану</variantright>
<variant>Видео өңдеу</variant>
<variant>Желі деңгейін арттыру</variant>
<variant>Өнімділікті қысқарту</variant>
<variant>Драйвер орнату</variant>

<question19>Нейрондық желінің негізі қайдан алынған?</question19>
<variantright>Адам миының құрылымы</variantright>
<variant>Космостық модельдер</variant>
<variant>Қарапайым графиктер</variant>
<variant>Файл жүйесі</variant>
<variant>Ресми хаттамалар</variant>

<question20>ЖИ қай салада қолданылады?</question20>
<variantright>Медицина, көлік, қаржы</variantright>
<variant>Музыка</variant>
<variant>Туризм</variant>
<variant>Геология</variant>
<variant>Спорттық ойындар</variant>

<question21>Генеративті модельдердің негізгі функциясы қандай?</question21>
<variantright>Жаңа деректер жасау</variantright>
<variant>Деректерді сақтау</variant>
<variant>Бағдарламаны орнату</variant>
<variant>Желі құрылымдау</variant>
<variant>Файлдарды көшіру</variant>

<question22>Трансформер архитектурасы қай жылы ұсынылды?</question22>
<variantright>2017</variantright>
<variant>2005</variant>
<variant>1999</variant>
<variant>2010</variant>
<variant>2023</variant>

<question23>Алғашқы чатбот Элиза қай кезде жасалды?</question23>
<variantright>1960 жж.</variantright>
<variant>1980 жж.</variant>
<variant>2000 жж.</variant>
<variant>2017 ж.</variant>
<variant>1950 жж.</variant>

<question24>Генеративті модельдер қандай механизм арқылы контексті ескереді?</question24>
<variantright>Назар аудару (Attention)</variantright>
<variant>Сүзгілеу</variant>
<variant>Кодтау</variant>
<variant>Компрессия</variant>
<variant>Token-парсер</variant>

<question25>Қазіргі заманғы чатботтарға мысал?</question25>
<variantright>ChatGPT</variantright>
<variant>Chrome</variant>
<variant>Photoshop</variant>
<variant>Windows</variant>
<variant>WhatsApp</variant>

<question26>Кескін және бейне құралдарының негізгі міндетіне не жатады?</question26>
<variantright>Суреттерді өңдеу</variantright>
<variant>Дыбысты басу</variant>
<variant>Сервер орнату</variant>
<variant>Желіні тексеру</variant>
<variant>Код компиляциясы</variant>

<question27>Компьютерлік көру қандай функция атқарады?</question27>
<variantright>Объектілерді тану</variantright>
<variant>Дыбысты сәйкестендіру</variant>
<variant>Пошта жіберу</variant>
<variant>SIM-картаны тексеру</variant>
<variant>DNS шешу</variant>

<question28>Генеративті сурет жасаушы құрал?</question28>
<variantright>MidJourney</variantright>
<variant>Excel</variant>
<variant>Word</variant>
<variant>Zoom</variant>
<variant>Notepad</variant>

<question29>Деректерді талдаудың мақсаты:</question29>
<variantright>Үлгілер мен трендтерді анықтау</variantright>
<variant>Деректерді жою</variant>
<variant>Архив жасау</variant>
<variant>Құжат басу</variant>
<variant>Электр қуатын үнемдеу</variant>

<question30>Деректерді өңдеу дегеніміз не?</question30>
<variantright>Шикі деректерді құрылымдық түрге келтіру</variantright>
<variant>Дыбысты жазу</variant>
<variant>Монтаж жасау</variant>
<variant>Сурет салу</variant>
<variant>Желі қосу</variant>

<question31>Сөйлеуді тану технологиясының атауы:</question31>
<variantright>ASR</variantright>
<variant>DNS</variant>
<variant>FTP</variant>
<variant>HTML</variant>
<variant>API</variant>

<question32>Сөйлеуді танудың негізгі қолданылуы:</question32>
<variantright>Мәтінге айналдыру</variantright>
<variant>Графика салу</variant>
<variant>Сервер құру</variant>
<variant>Желі орнату</variant>
<variant>Видеокарта баптау</variant>

<question33>Кеңсе автоматтандыруының мақсаты:</question33>
<variantright>Процестерді жеңілдету</variantright>
<variant>Трафикті шектеу</variant>
<variant>Компьютерді салқындату</variant>
<variant>Порттарды ашу</variant>
<variant>Бағдарламаны жою</variant>

<question34>Құжат айналымындағы технология:</question34>
<variantright>Электрондық қолтаңба</variantright>
<variant>BIOS</variant>
<variant>HDMI</variant>
<variant>DHCP</variant>
<variant>VGA</variant>

<question35>Маркетингте ЖИ қандай рөл атқарады?</question35>
<variantright>Клиент деректерін талдау</variantright>
<variant>Желіні басқару</variant>
<variant>Антивирус орнату</variant>
<variant>Видеокарта жаңарту</variant>
<variant>Архив ашу</variant>

<question36>ЖИ арқылы дербестендіру мысалы:</question36>
<variantright>Ұсыныс жүйелері</variantright>
<variant>Брандмауэр</variant>
<variant>BIOS баптау</variant>
<variant>Меңзер жылдамдығы</variant>
<variant>Электр сөндіру</variant>

<question37>Маркетингтегі автоматтандыру құралы:</question37>
<variantright>Чат-боттар</variantright>
<variant>GPU</variant>
<variant>SSH</variant>
<variant>HDMI</variant>
<variant>CMOS</variant>

<question38>Тілді өңдеуде қолданылатын ЖИ платформасы:</question38>
<variantright>ChatGPT</variantright>
<variant>WinRAR</variant>
<variant>BitLocker</variant>
<variant>Task Manager</variant>
<variant>WordPad</variant>

<question39>Сурет генерациялау платформасына мысал:</question39>
<variantright>Stable Diffusion</variantright>
<variant>Zoom</variant>
<variant>Steam</variant>
<variant>Edge</variant>
<variant>WinZip</variant>

<question40>ЖИ қолданудағы маңызды аспектілердің бірі:</question40>
<variantright>Ақпараттың сенімділігі</variantright>
<variant>Файл атауын қысқарту</variant>
<variant>Терезе түсін өзгерту</variant>
<variant>Компьютерді өшіру</variant>
<variant>Порт жылдамдығын арттыру</variant>

<question41>No-code AI платформаларының негізгі артықшылығы қандай?</question41>
<variantright>Бағдарламалау білімі қажет емес</variantright>
<variant>Python тілін қолдануды талап етеді</variant>
<variant>Деректерді қолмен өңдеу міндетті</variant>
<variant>Модельдерді тек бұлтта жасауға болады</variant>
<variant>Автоматты оқыту мүмкін емес</variant>

<question42>Google AutoML платформасы негізінен не үшін қолданылады?</question42>
<variantright>Автоматты машиналық оқыту</variantright>
<variant>Веб-сайт жасау</variant>
<variant>Мобильді ойын құру</variant>
<variant>Деректерді қолмен талдау</variant>
<variant>Деректерді PDF форматында сақтау</variant>

<question43>Microsoft Azure ML Studio интерфейсі қалай сипатталады?</question43>
<variantright>Drag-and-drop конструктор</variantright>
<variant>Код арқылы басқару</variant>
<variant>Мәтіндік командалар арқылы</variant>
<variant>Алгоритмдерді қолмен жазу қажет</variant>
<variant>Деректерді тек жергілікті сақтау мүмкіндігі</variant>

<question44>IBM Watson Studio қандай артықшылыққа ие?</question44>
<variantright>AutoAI құралдары арқылы ең тиімді алгоритмдерді таңдау</variantright>
<variant>Суреттермен ғана жұмыс істейді</variant>
<variant>Веб-браузерді қажет етпейді</variant>
<variant>Модельдерді экспорттай алмайды</variant>
<variant>Жеке компьютерде ғана жұмыс істейді</variant>

<question45>Teachable Machine платформасы қандай тапсырмаларға арналған?</question45>
<variantright>Сурет, дыбыс және қимыл арқылы модельдерді үйрету</variantright>
<variant>Деректер базасын басқару</variant>
<variant>Клиенттерді сегменттеу</variant>
<variant>Мәтіндік деректерді тексеру</variant>
<variant>AutoML қолдануды талап етеді</variant>

<question46>Lobe.ai платформасының ерекшелігі неде?</question46>
<variantright>Компьютерде жергілікті түрде жұмыс істейді</variantright>
<variant>Бұлтта ғана қолжетімді</variant>
<variant>Мәтіндік деректерді өңдейді</variant>
<variant>Python кодын жазуды талап етеді</variant>
<variant>Визуалды интерфейс жоқ</variant>

<question47>No-code AI платформаларында деректерді жүктеу қандай форматта болуы мүмкін?</question47>
<variantright>CSV, сурет, аудио</variantright>
<variant>PDF</variant>
<variant>Тек текстік файл</variant>
<variant>SQL дерекқоры</variant>
<variant>HTML</variant>

<question48>AutoML не үшін қолданылады?</question48>
<variantright>Алгоритмдерді автоматты таңдау және гиперпараметрлерді баптау</variantright>
<variant>Модельдерді қолмен салыстыру</variant>
<variant>Деректерді визуализациялау</variant>
<variant>Веб-қосымшалар жасау</variant>
<variant>Қателерді қолмен түзету</variant>

<question49>No-code платформаларында модельді визуалды түрде қалай жобалауға болады?</question49>
<variantright>Блок-схема немесе модульдік диаграмма арқылы</variantright>
<variant>Мәтіндік командалар арқылы</variant>
<variant>Python коды жазу арқылы</variant>
<variant>Реттелмеген деректерді қолдану арқылы</variant>
<variant>API интеграциясынсыз</variant>

<question50>Тестілеу кезеңінде үлгіні қалай бағалауға болады?</question50>
<variantright>Қателер матрицасы, ROC-қисықтары, дәлдік көрсеткіштері арқылы</variantright>
<variant>Суреттер арқылы</variant>
<variant>Веб-браузерді қолданбай</variant>
<variant>Модельді қайта оқытусыз</variant>
<variant>Қолмен деректер енгізу арқылы</variant>

<question51>DataRobot платформасы қандай нарыққа бағытталған?</question51>
<variantright> Корпоративтік бизнеске</variantright>
<variant> Білім беру саласына</variant>
<variant> Жеке жобаларға</variant>
<variant> Стартаптарға</variant>
<variant> Мобильді ойындарға</variant>

<question52>No-code AI платформаларында шешілетін міндеттерге қайсысы жатады?</question52>
<variantright> Бейнелерді, мәтінді, дыбысты талдау және болжау</variantright>
<variant> Веб-сайт құру</variant>
<variant> Python бағдарламалау</variant>
<variant> Деректерді тексерусіз сақтау</variant>
<variant> Қолмен график құру</variant>


<question53>Microsoft Azure ML Studio платформасында дайын алгоритмдер қандай түрлерде болады?</question53>
<variantright>Классификация, регрессия, кластеризация</variantright>
<variant>Регрессия</variant>
<variant>Кластеризация</variant>
<variant>Визуализация</variant>
<variant>Мәтіндік талдау</variant>

<question54>IBM Watson Studio платформасы қай салаларда тиімді?</question54>
<variantright>Бизнес және ғылым, деректерді қорғау қажет кезде</variantright>
<variant>Ойын индустриясында</variant>
<variant>Жеке компьютерде</variant>
<variant>Веб-сайттар жасау үшін</variant>
<variant>Сурет өңдеу</variant>

<question55>Teachable Machine арқылы дайын модельдерді қайда қолдануға болады?</question55>
<variantright>Веб-қосымшаларда немесе Arduino жобаларында</variantright>
<variant>Мобильді телефонда</variant>
<variant>Бұлтта сақтауға</variant>
<variant>Визуалды графиксіз</variant>
<variant>Деректерді экспорттау</variant>

<question56>Kodсыз AI платформасында деректерді қайдан жүктеуге болады?</question56>
<variantright>Компьютерден немесе бұлтты сервистерден</variantright>
<variant>Google Drive</variant>
<variant>USB арқылы</variant>
<variant>SQL дерекқорынан</variant>
<variant>Веб-браузер арқылы</variant>

<question57>Автоматтандырылған оқыту кезінде қандай метрикалар қолданылады?</question57>
<variantright>Дәлдік, қателік, F1-score</variantright>
<variant>Графиктер</variant>
<variant>Веб-беттер</variant>
<variant>Сурет</variant>
<variant>Дыбыс</variant>

<question58>Lobe.ai платформасы қандай тапсырмаларға жарайды?</question58>
<variantright>Нысандарды, бет-жүздерді, қимылдарды тану</variantright>
<variant>Веб-дизайн жасау</variant>
<variant>Мобильді қосымшалар жасау</variant>
<variant>Мәтіндік деректерді сақтау</variant>
<variant>Деректерді қолмен өңдеу</variant>

<question59>Кодсыз ЖИ платформалары білім беру саласында қалай қолданылады?</question59>
<variantright>Үй тапсырмаларын автоматты тексеру, қолжазбаны тану</variantright>
<variant>Ойын құру</variant>
<variant>Суреттерді сақтау</variant>
<variant>Веб-браузерді жаңарту</variant>
<variant>Мәтінді визуалдау</variant>

<question60>Кодсыз AI үлгісін интеграциялаудың соңғы кезеңі қандай?</question60>
<variantright>API арқылы қосымшаларға қосу немесе экспорттау</variantright>
<variant>Визуалды бақылау</variant>
<variant>Қолмен оқыту</variant>
<variant>Деректерді тексерусіз сақтау</variant>
<variant>Модельді браузерде пайдалану</variant>

<question61>Генеративті ЖИ-дің басты айырмашылығы</question61>
<variantright>Жаңа контент: сурет, музыка, видео жасайды</variantright>
<variant>Ескі деректерді талдап қана қояды</variant>
<variant>Интернетте іздеу ғана жасайды</variant>
<variant>Код жазуға және бағдарламалауға арналған</variant>
<variant>Тек мәтінді аударма жасауға арналған</variant>

<question62>DALL·E атауы қайдан шыққан?</question62>
<variantright>Сальвадор Дали + WALL·E роботы</variantright>
<variant>Дисней мультфильмінен шыққан атау</variant>
<variant>Далай Лама және Эйнштейн есімі</variant>
<variant>Дарт Вейдер және Элон Маск есімі</variant>
<variant>Далап және Эппл компаниясы есімі</variant>

<question63>DALL·E алғаш қашан ұсынылды?</question63>
<variantright>2021 жылы OpenAI компаниясы ұсынды</variantright>
<variant>2019 жылы Google компаниясы ұсынды</variant>
<variant>2020 жылы Microsoft компаниясы ұсынды</variant>
<variant>2022 жылы Meta компаниясы ұсынды</variant>
<variant>2023 жылы Stability AI ұсынды</variant>

<question64>DALL·E және Stable Diffusion принципі</question64>
<variantright>Диффузиялық модельдер негізінде жұмыс істейді</variantright>
<variant>GAN архитектурасы негізінде жұмыс істейді</variant>
<variant>Рекурренттік желілер негізінде жұмыс істейді</variant>
<variant>Конволюциялық желілер негізінде жұмыс істейді</variant>
<variant>Трансформерлер ғана негізінде жұмыс істейді</variant>

<question65>Stable Diffusion-ның ең үлкен ерекшелігі</question65>
<variantright>Ашық код және жергілікті орнату мүмкіндігі</variantright>
<variant>Бұлтта ғана жұмыс істейді және жабық код</variant>
<variant>Discord платформасында ғана қолжетімді</variant>
<variant>Суретті ғана жасайды, бейне жасамайды</variant>
<variant>Тек ақылы нұсқасы бар және шектеулі</variant>

<question66>MidJourney қай платформада жұмыс істейді?</question66>
<variantright>Discord бот арқылы қолданушыларға қызмет көрсетеді</variantright>
<variant>Telegram бот арқылы қолданушыларға қызмет көрсетеді</variant>
<variant>Instagram арқылы қолданушыларға қызмет көрсетеді</variant>
<variant>WhatsApp арқылы қолданушыларға қызмет көрсетеді</variant>
<variant>TikTok платформасы арқылы қызмет көрсетеді</variant>

<question67>MidJourney суреттерінің басты ерекшелігі</question67>
<variantright>Көркемдік және стильді шығармаға ұқсайды</variantright>
<variant>Техникалық сызба және диаграмма жасайды</variant>
<variant>Фотосурет сапасында шынайы сурет жасайды</variant>
<variant>3D модель және анимация ғана жасайды</variant>
<variant>Тек қара-ақ суреттерді ғана жасайды</variant>

<question68>Canva AI қашан генеративті функция қосты?</question68>
<variantright>2022 жылы онлайн-редакторға қосылды</variantright>
<variant>2020 жылы онлайн-редакторға қосылды</variant>
<variant>2021 жылы онлайн-редакторға қосылды</variant>
<variant>2023 жылы онлайн-редакторға қосылды</variant>
<variant>2019 жылы онлайн-редакторға қосылды</variant>

<question69>Canva AI-дің мақсатты аудиториясы</question69>
<variantright>Студенттер, оқытушылар және маркетологтар</variantright>
<variant>Кәсіби суретшілер және иллюстраторлар</variant>
<variant>Бағдарламашылар және деректер ғалымдары</variant>
<variant>Музыканттар және дыбыс инженерлері</variant>
<variant>Видеооператорлар және монтажерлер</variant>

<question70>AIVA қай стильде музыка жасай алады?</question70>
<variantright>Классикалық композиторлар стилінде жасайды</variantright>
<variant>Хип-хоп және рэп стильдерінде жасайды</variant>
<variant>Рок және металл стильдерінде жасайды</variant>
<variant>Қазақ халық әндері стилінде жасайды</variant>
<variant>Электронды және техно стильде жасайды</variant>

<question71>AIVA виртуалды композитор қашан пайда болды?</question71>
<variantright>2016 жылы алғаш рет ұсынылды</variantright>
<variant>2014 жылы алғаш рет ұсынылды</variant>
<variant>2017 жылы алғаш рет ұсынылды</variant>
<variant>2018 жылы алғаш рет ұсынылды</variant>
<variant>2020 жылы алғаш рет ұсынылды</variant>

<question72>Amper Music-тің басты артықшылығы</question72>
<variantright>Музыкалық білім қажет етпейді және жылдам</variantright>
<variant>Күрделі редактор және ұзақ үйрету қажет</variant>
<variant>Классикалық музыкаға ғана шектелген</variant>
<variant>Вокал және сөз қосуға ғана арналған</variant>
<variant>Аспаптық музыкаға ғана шектелген</variant>

<question73>Soundraw-тың ерекшелігі неде?</question73>
<variantright>Генерация және толық редактор біріктірілген</variantright>
<variant>Генерация ғана бар, редактор жоқ</variant>
<variant>Редактор ғана бар, генерация жоқ</variant>
<variant>Вокал қосуға ғана арналған құрал</variant>
<variant>Экспорт мүмкіндігі жоқ құрал</variant>

<question74>Google Magenta жобасының мақсаты</question74>
<variantright>Зерттеу және эксперименттік генерация мақсаты</variantright>
<variant>Коммерциялық музыка жасау мақсаты</variant>
<variant>Видео генерациялауға арналған мақсаты</variant>
<variant>Сурет салуға ғана арналған мақсаты</variant>
<variant>Чат-бот жасауға арналған мақсаты</variant>

<question75>Runway Gen-2 қашан бейне генерацияны бастады?</question75>
<variantright>2023 жылы Gen-2 моделі шықты</variantright>
<variant>2021 жылы Gen-2 моделі шықты</variant>
<variant>2020 жылы Gen-2 моделі шықты</variant>
<variant>2022 жылы Gen-2 моделі шықты</variant>
<variant>2019 жылы Gen-2 моделі шықты</variant>

<question76>Pika Labs-тің негізгі мүмкіндігі</question76>
<variantright>Статикалық суретті анимацияға айналдырады</variantright>
<variant>3D модельдерді ғана жасай алады</variant>
<variant>Мәтіннен музыка жасай алады</variant>
<variant>Музыкадан сурет жасай алады</variant>
<variant>Код жазуға көмектеседі</variant>

<question77>Synthesia қандай технология қолданады?</question77>
<variantright>Deepfake аватар және мәтінді сөйлеуге айналдыру</variantright>
<variant>3D анимация және қолмен модельдеу</variant>
<variant>Мультфильм стилінде аватар жасау</variant>
<variant>Стоп-моушн технологиясы қолданады</variant>
<variant>Голограмма және VR технологиясы</variant>

<question78>Synthesia-ның негізгі қолданылу саласы</question78>
<variantright>Актерсіз оқу және корпоративтік бейнелер</variantright>
<variant>Кинофильмдерді толық түсіруге арналған</variant>
<variant>Музыкалық клиптерді жасауға арналған</variant>
<variant>Ойын әзірлеуге арналған құрал</variant>
<variant>Архитектуралық визуализацияға арналған</variant>

<question79>Генеративті ЖИ-ді қалай қолданған дұрыс?</question79>
<variantright>Адам шығармашылығына көмекші құрал ретінде</variantright>
<variant>Адамның орнын толық алмастыру ретінде</variant>
<variant>Тек ақша табу мақсатында қолдану</variant>
<variant>Тек ойын-сауық мақсатында қолдану</variant>
<variant>Білімнен бас тарту мақсатында қолдану</variant>

<question80>Генеративті ЖИ студенттерге не береді?</question80>
<variantright>Идеяларды жылдам жүзеге асыру мүмкіндігі</variantright>
<variant>Уақытты босқа өткізуге мүмкіндік береді</variant>
<variant>Қиялды шектеуге және шаблонға салуды</variant>
<variant>Кәсіби мамандарға ғана көмектеседі</variant>
<variant>Мұғалімдерге ғана қажет құрал</variant>

<question81>Үлкен тілдік модель (LLM) дегеніміз не?</question81>
<variantright>Миллиардтаған параметрі бар нейрожелі</variantright>
<variant>Кішігірім мәтін өңдеуге арналған модель</variant>
<variant>Сурет және видео генерациялайтын модель</variant>
<variant>Деректер базасын басқаруға арналған модель</variant>
<variant>Роботты басқаруға арналған жүйе</variant>

<question82>LLM-нің негізгі архитектурасы қалай аталады?</question82>
<variantright>Трансформер архитектурасы қолданылады</variantright>
<variant>Конволюциялық желілер қолданылады</variant>
<variant>Рекурренттік желілер қолданылады</variant>
<variant>Генеративті-антагонистік желілер</variant>
<variant>Қарапайым перцептрон қолданылады</variant>

<question83>GPT сөзі нені білдіреді?</question83>
<variantright>Generative Pre-trained Transformer</variantright>
<variant>General Purpose Text Generator</variant>
<variant>Global Processing Technology</variant>
<variant>Graphics Processing Transformer</variant>
<variant>Google Pre-trained Tool</variant>

<question84>LLM-ді алдын ала үйрету қалай жүреді?</question84>
<variantright>Келесі сөзді болжау арқылы жүреді</variantright>
<variant>Суреттерді классификациялау арқылы</variant>
<variant>Сандарды сұрыптау арқылы жүреді</variant>
<variant>Дыбыстарды тану арқылы жүреді</variant>
<variant>Видео кадрларды талдау арқылы</variant>

<question85>BERT моделінің ерекшелігі неде?</question85>
<variantright>Екі жақты контекстті түсінеді</variantright>
<variant>Тек солдан оңға қарай оқиды</variant>
<variant>Тек оңнан солға қарай оқиды</variant>
<variant>Суреттерді өңдеуге арналған</variant>
<variant>Музыка генерациялауға арналған</variant>

<question86>LLM-де параметрлер саны неге әсер етеді?</question86>
<variantright>Тілді түсіну және генерация сапасына</variantright>
<variant>Жылдамдыққа ғана әсер етеді</variant>
<variant>Энергия шығынына ғана әсер етеді</variant>
<variant>Деректер сақтау көлеміне әсер етеді</variant>
<variant>Интерфейс дизайнына әсер етеді</variant>

<question87>LLaMA моделін кім әзірледі?</question87>
<variantright>Meta AI зерттеу тобы әзірледі</variantright>
<variant>Google DeepMind тобы әзірледі</variant>
<variant>OpenAI зерттеу тобы әзірледі</variant>
<variant>Anthropic компаниясы әзірледі</variant>
<variant>Microsoft Research әзірледі</variant>

<question88>Prompt engineering дегеніміз не?</question88>
<variantright>Модельге дұрыс нұсқау беру өнері</variantright>
<variant>Модельді қайта үйрету процесі</variant>
<variant>Жаңа нейрожелі құрастыру</variant>
<variant>Деректерді тазалау процесі</variant>
<variant>Серверді баптау процесі</variant>

<question89>Few-shot learning дегеніміз не?</question89>
<variantright>Бірнеше мысалмен жұмыс істей алу</variantright>
<variant>Мысалсыз жұмыс істей алу қабілеті</variant>
<variant>Миллиондаған мысал қажет ету</variant>
<variant>Тек бір ғана мысалмен жұмыс</variant>
<variant>Мысалдарсыз мүлде жұмыс істемеу</variant>

<question90>Zero-shot learning қалай жұмыс істейді?</question90>
<variantright>Ешқандай мысалсыз тапсырманы орындайды</variantright>
<variant>Кемінде 100 мысал қажет етеді</variant>
<variant>Тек алдын ала үйретілген тапсырмалар</variant>
<variant>Суреттермен ғана жұмыс істейді</variant>
<variant>Дыбыстармен ғана жұмыс істейді</variant>

<question91>Chain-of-Thought prompting не береді?</question91>
<variantright>Логикалық ойлауды жақсартады</variantright>
<variant>Жауапты қысқартады ғана</variant>
<variant>Сурет генерациялайды</variant>
<variant>Мәтінді аударма жасауға көмектеседі</variant>
<variant>Кодты ғана жақсартады</variant>

<question92>Retrieval-Augmented Generation (RAG) не істейді?</question92>
<variantright>Сыртқы білімді пайдаланып жауап береді</variantright>
<variant>Тек ішкі білімін ғана пайдаланады</variant>
<variant>Суреттерді іздеп генерациялайды</variant>
<variant>Дыбыстық файлдарды өңдейді</variant>
<variant>Видео кадрларды талдайды</variant>

<question93>Hallucination дегеніміз не?</question93>
<variantright>Модельдің өтірік немесе қате ақпарат беруі</variantright>
<variant>Модельдің сурет генерациялауы</variant>
<variant>Модельдің жылдам жауап беруі</variant>
<variant>Модельдің энергияны үнемдеуі</variant>
<variant>Модельдің дұрыс жауап беруі</variant>

<question94>Token дегеніміз не?</question94>
<variantright>Мәтіннің ең кіші бөлшегі (сөз немесе бөлшек)</variantright>
<variant>Модельдің параметрінің саны</variant>
<variant>Пайдаланушының идентификаторы</variant>
<variant>Сервердің IP мекенжайы</variant>
<variant>Графикалық интерфейс элементі</variant>

<question95>Context window дегеніміз не?</question95>
<variantright>Модель есте сақтай алатын мәтін көлемі</variantright>
<variant>Модельдің жылдамдығы</variant>
<variant>Модельдің энергия шығыны</variant>
<variant>Модельдің параметрлер саны</variant>
<variant>Модельдің интерфейсі</variant>

<question96>GPT-4-тің контекст терезесі қанша token?</question96>
<variantright>128 000 token дейін жетеді</variantright>
<variant>4 096 token дейін жетеді</variant>
<variant>32 000 token дейін жетеді</variant>
<variant>8 192 token дейін жетеді</variant>
<variant>2 048 token дейін жетеді</variant>

<question97>Fine-tuning дегеніміз не?</question97>
<variantright>Модельді нақты тапсырмаға бейімдеу</variantright>
<variant>Модельді нөлден үйрету процесі</variant>
<variant>Модельді толық жою процесі</variant>
<variant>Модельді жылдамдату процесі</variant>
<variant>Модельді қазақшаға аудару</variant>

<question98>LoRA дегеніміз не?</question98>
<variantright>Параметрлердің аз бөлігін ғана өзгерту әдісі</variantright>
<variant>Жаңа модель құрастыру әдісі</variant>
<variant>Модельді толық қайта үйрету</variant>
<variant>Модельді бұлтқа көшіру әдісі</variant>
<variant>Модельді өшіру әдісі</variant>

<question99>Қазақ тіліндегі ең танымал LLM қайсы?</question99>
<variantright>QazLM немесе KazakhGPT жобалары</variantright>
<variant>EnglishGPT немесе RussianGPT</variant>
<variant>ChineseLM немесе ArabicLM</variant>
<variant>SpanishGPT немесе FrenchGPT</variant>
<variant>GermanLM немесе ItalianLM</variant>

<question100>LLM-ді қолданудың этикалық мәселесі</question100>
<variantright>Өтірік ақпарат тарату және авторлық құқық</variantright>
<variant>Тек жылдамдық және тиімділік мәселесі</variant>
<variant>Тек энергия шығыны мәселесі</variant>
<variant>Тек интерфейс дизайны мәселесі</variant>
<variant>Тек сервер орналасуы мәселесі</variant>

<question101>Суреттерді танудың негізгі мақсаты не?</question101>
<variantright>Кескін мазмұнын автоматты тану әдісін қолдану</variantright>
<variant>Дерек мәтінін автоматты өңдеу тәсілін пайдалану</variant>
<variant>Баян мәтінін алгоритмдік талдау жүйесін қолдану</variant>
<variant>Сандық файлды құрылымдық түрге көшіру жолын пайдалану</variant>
<variant>Мәтін блокты когнитивтік өңдеу үлгісін қолдану</variant>

<question102>Нысандарды анықтау дегеніміз не?</question102>
<variantright>Кескінде объект орнын автоматты табу тәсілі</variantright>
<variant>Дыбыс файлын сандық түрге түрлендіру әдісі</variant>
<variant>Мәтін үзіндісін логикалық топқа орналастыру</variant>
<variant>Деректерді уақытша кесте бойынша бөлу тәсілі</variant>
<variant>Файл құрылымын қадамдық форматқа жіктеу</variant>

<question103>Суреттерді жіктеу мақсаты қандай?</question103>
<variantright>Кескінді белгілі санат бойынша топқа бөлу</variantright>
<variant>Дыбысты эмоция бағытымен саралау</variant>
<variant>Мәтін бөлігін синтаксистік тұрғыда бөлу</variant>
<variant>Сандық ақпаратты жылдам жою тәсілін қолдану</variant>
<variant>Мәліметті кездейсоқ реттік блокқа бөлу</variant>

<question104>Компьютерлік көру дегеніміз не?</question104>
<variantright>Машиналарға визуалды ақпаратты түсіндіру саласы</variantright>
<variant>Жүйелерге мәтін тілін синтездеу технологиясы</variant>
<variant>Сандық дыбысты когнитивтік сүзгіден өткізу</variant>
<variant>Мәліметті кестелік құрылымға аудару әдісі</variant>
<variant>Баян мәтінін статистикалық өңдеу тәсілі</variant>

<question105>TensorFlow не істей алады?</question105>
<variantright>Кескінді тануға арналған үлгілерді үйрету</variantright>
<variant>Дыбысты сандық спектрге бөлу механизмін қолдану</variant>
<variant>Мәтінді құрылымдық грамматикаға бөлу</variant>
<variant>Кесте мәндерін индекстік ретпен бөлу</variant>
<variant>Файл құрылымын блоктық түрге бөлу</variant>

<question106>Teachable Machine қандай құрал ретінде қолданылады?</question106>
<variantright>Машиналық оқытуды визуалды ортада құру құралы</variantright>
<variant>Мәтінді синтаксистік талдау қызметін атқару</variant>
<variant>Дыбысты жиілік бойынша саралау жүйесін қолдану</variant>
<variant>Файлдарды каталогтық құрылымға бөлу жүйесін</variant>
<variant>Кесте мәндерін уақыттық блокқа бөлу тәсілін</variant>

<question107>Teachable Machine сурет моделі не істей алады?</question107>
<variantright>Суреттерді санат бойынша автоматты жіктейді</variantright>
<variant>Мәтінді логикалық блок бойынша бөледі</variant>
<variant>Дыбыс дерегін диапазонға ажыратады</variant>
<variant>Кесте мәндерін ретпен құрылымдайды</variant>
<variant>Файлдарды блоктық жүйеге бөледі</variant>

<question108>Объектілерді тануда деректердің жеткілікті болуы неге маңызды?</question108>
<variantright>Модельдің дәлдігі мен тұрақтылығын арттыру үшін</variantright>
<variant>Мәтінді мағыналық бөлуге мүмкіндік беру үшін</variant>
<variant>Дыбысты нақты жиілікке қою мүмкіндігі үшін</variant>
<variant>Файл блоктарын дұрыс бөлу үшін қажет</variant>
<variant>Кесте құрылымын дұрыс реттеу үшін</variant>

<question109>Teachable Machine интерфейсінің артықшылығы қандай?</question109>
<variantright>Код жазбай үлгі құруға мүмкіндік береді</variantright>
<variant>Тек мәтін өңдеуге арналған құрал береді</variant>
<variant>Дыбысты тек жиілікке бөлуге жарайды</variant>
<variant>Файл құрылымын индекстеуге қолайлы</variant>
<variant>Кесте құрылымын топтастырады</variant>

<question110>Нысандарды тану үшін не маңызды?</question110>
<variantright>Әртүрлі ракурстағы сапалы деректер жинау</variantright>
<variant>Мәтін жолдарын грамматикаға бөлу</variant>
<variant>Дыбыстың спектрлік бөлігін алу</variant>
<variant>Файл каталогын дұрыс бөлу</variant>
<variant>Кесте мәнін реттеу тәсілі</variant>

<question111>Teachable Machine қандай дерек түрлерімен жұмыс істей алады?</question111>
<variantright>Суретпен, дыбыспен және қозғалыспен жұмыс істей алады</variantright>
<variant>Тек мәтінмен және синтаксиспен айналысады</variant>
<variant>Тек дыбысты жиілікке бөлуге арналған</variant>
<variant>Тек файл құрылымын реттеуге жарайды</variant>
<variant>Тек кестелік мәндерді бөлуге арналған</variant>

<question112>Teachable Machine нәтижесін қалай көруге болады?</question112>
<variantright>Үлгі болжамын онлайн тест арқылы көру</variantright>
<variant>Мәтін құрылымын синтаксистік талдау</variant>
<variant>Дыбысты спектрде визуалдау</variant>
<variant>Файл тәртібін кестеде көру</variant>
<variant>Каталог мәндерін реттеу</variant>

<question113>Teachable Machine үлгісін қолдануға болатын орын?</question113>
<variantright>Веб-сайттарда, қосымшаларда және жобаларда</variantright>
<variant>Тек мәтіндік редакторларда қолдану</variant>
<variant>Тек дыбыс жүйелерінде пайдалану</variant>
<variant>Тек файл құрылымдарын реттеу</variant>
<variant>Тек кесте редакторларында қолдану</variant>

<question114>NLP дегеніміз не?</question114>
<variantright>Табиғи тілді автоматты өңдеу технологиясы</variantright>
<variant>Сандық деректі құрылымға бөлу әдісі</variant>
<variant>Дыбысты жиілік арқылы талдау жүйесі</variant>
<variant>Файлдарды блоктық реттеу тәсілі</variant>
<variant>Кестені индекспен топтау әдісі</variant>

<question115>NLP қолдану мақсаты қандай?</question115>
<variantright>Мәтінді мағыналық тұрғыда автоматты талдау</variantright>
<variant>Дыбыс спектрін диапазонға бөлу тәсілі</variant>
<variant>Файл құрылымын жүйелік реттеу жолы</variant>
<variant>Кестелік мәндерді топтап бөлу әдісі</variant>
<variant>Сандық белгіленген блокты өңдеу</variant>

<question116>Мәтіндік деректерді алдын ала өңдеу не үшін қажет?</question116>
<variantright>Модельге дұрыс кіріс беру үшін мәтінді дайындау</variantright>
<variant>Дыбыстық сигналды нақтылау үшін қолдану</variant>
<variant>Файл атауларын каталогқа бөлу үшін</variant>
<variant>Кестелік мәндерді реттеу үшін</variant>
<variant>Сандық форматты блоктау үшін</variant>

<question117>Tokenization дегеніміз не?</question117>
<variantright>Мәтінді бөлек сөздерге немесе бірліктерге бөлу</variantright>
<variant>Дыбысты жиілік деңгейіне түрлендіру</variant>
<variant>Файл құрылымын блокқа жіктеу</variant>
<variant>Кесте мәндерін индекспен бөлу</variant>
<variant>Сандық деректі битке бөлу</variant>

<question118>NLP модельдерін оқыту не үшін жүргізіледі?</question118>
<variantright>Мәтінді автоматты түсіну сапасын жақсарту үшін</variantright>
<variant>Дыбысты спектрге бөлу дәлдігін өсіру үшін</variant>
<variant>Файл құрылымын реттеу үшін</variant>
<variant>Кесте мәндерін өңдеу үшін</variant>
<variant>Сандық форматты бөлу үшін</variant>

<question119>Named Entity Recognition (NER) не істейді?</question119>
<variantright>Мәтіндегі атаулы нысандарды анықтайды</variantright>
<variant>Дыбыс спектрін жіктейді және бөледі</variant>
<variant>Файл құрылымын ретке келтіреді</variant>
<variant>Кесте мәндерін блокқа бөледі</variant>
<variant>Сандық деректі жүйелейді</variant>

<question120>NLP-де машиналық оқыту не үшін қажет?</question120>
<variantright>Мәтін үлгілерінен заңдылықтарды анықтау үшін</variantright>
<variant>Дыбыс диапазонын автоматты бөлу үшін</variant>
<variant>Файл құрылымын реттеу үшін</variant>
<variant>Кесте мәндерін бөлу үшін</variant>
<variant>Сандық деректі блоктау үшін</variant>

<question121>NLP-де модель нәтижесін бағалау үшін не қолданылады?</question121>
<variantright>Дәлдік пен қателік көрсеткіштерін есептеу</variantright>
<variant>Дыбыс деңгейін аралыққа бөлу әдісі</variant>
<variant>Файл құрылымын индекстеу тәсілі</variant>
<variant>Кесте блоктарын талдау тәсілі</variant>
<variant>Сандық мәндерді реттеу</variant>

<question122>Көңіл-күйді талдау үлгілері нені анықтайды?</question122>
<variantright>Мәтіндегі оң, теріс немесе бейтарап эмоцияны</variantright>
<variant>Дыбыстың қуат деңгейін анықтауды</variant>
<variant>Файл реттеу жүйесін бағалауды</variant>
<variant>Кесте мәндерінің таратылуын</variant>
<variant>Сандық құрылымды өңдеуді</variant>

<question123>NLP құралдарын қолданудың нәтижесі қандай?</question123>
<variantright>Мәтінді автоматты түсіну және талдау сапасы</variantright>
<variant>Дыбыс спектрін реттеу тиімділігі</variant>
<variant>Файл құрылымын бөлу нәтижесі</variant>
<variant>Кесте жүйесін өңдеу тиімділігі</variant>
<variant>Сандық мәліметті реттеу дәлдігі</variant>

<question124>Мәтіндегі эмоцияларды анықтауда қандай категориялар жиі қолданылады?</question124>
<variantright>Оң, теріс және бейтарап эмоция түрлері</variantright>
<variant>Жоғары, төмен және орта дыбыс деңгейлері</variant>
<variant>Файл ретін реттеу және топтау түрлері</variant>
<variant>Кестелік мәндерді салыстыру түрлері</variant>
<variant>Сандық блоктарды бөлу тәсілдері</variant>

<question125>Көңіл-күй талдауында қандай деректер жиі қолданылады?</question125>
<variantright>Пікірлер мен хабарламалар мәтіндік үлгілері</variantright>
<variant>Дыбыс сигналдарының спектрлік түрлері</variant>
<variant>Файл құрылымына қатысты мәліметтер</variant>
<variant>Кесте мәндері туралы дерек көздері</variant>
<variant>Сандық форматтағы биттік үлгілер</variant>

<question126>Speechma платформасының негізгі мүмкіндігі қандай?</question126>
<variantright>Дыбысты мәтінге автоматты түрде түрлендіру мүмкіндігі</variantright>
<variant>Бейнені монтажда қолмен қию функциялары</variant>
<variant>Кестелерді өңдеуге арналған есептеу құралдары</variant>
<variant>3D модельдер құрастыруға арналған орта</variant>
<variant>Желілік ақауларды талдауға арналған модуль</variant>

<question127>D-ID сервисі қандай ерекшелікке ие?</question127>
<variantright>Бет анимациясын жасанды интеллект арқылы генерациялау</variantright>
<variant>Мәтінді үлкен дерекқорда индекстеу құралдары</variant>
<variant>Көпфункциялы файлдарды архивтеу опциялары</variant>
<variant>Геолокацияны нақты уақытта бақылау жүйесі</variant>
<variant>Қолданбаларды офлайн режимде кодтау қызметі</variant>

<question128>Gaga.ai платформасы негізінен не үшін қолданылады?</question128>
<variantright>Ән айтуға арналған дауысты AI арқылы синтездеу</variantright>
<variant>Деректерді кестелік форматта статистикалық өңдеу</variant>
<variant>Карта құруға арналған графикалық редактор құралдары</variant>
<variant>Қашықтан басқарылатын роботтарды бақылау жүйесі</variant>
<variant>Компьютер жадын ұйымдастыру тәсілдерін басқару</variant>

<question129>Speechma көмегімен қандай жұмыс орындалады?</question129>
<variantright>Аудио файлдарды талдап мәтінді автоматты генерациялау</variantright>
<variant>Сандық графика құруға арналған шеберлік мүмкіндіктері</variant>
<variant>Видео сапасын көтеруге арналған визуалды түзету</variant>
<variant>Географиялық координаттарды классификациялау</variant>
<variant>Мультимедиа файлдарын шифрлау алгоритмдері</variant>

<question130>D-ID қолданушыға қандай функция ұсынады?</question130>
<variantright>Тілді сөйлеп тұрған аватарларды жасанды түрде жасау</variantright>
<variant>Кең көлемді есептерді параллель өңдеу жүйесін қосу</variant>
<variant>Мәтіндік құжаттарды математикалық бөлу әдістері</variant>
<variant>Құрылғылар арасындағы сигналдарды сүзгілеу тәсілдері</variant>
<variant>Күрделі бағдарлама кодтарын автоматты құрастыру</variant>

<question131>Gaga.ai қандай технологияны қолданады?</question131>
<variantright>Дауысты стильге бейімдеп музыкалық түрде синтездеу</variantright>
<variant>Кестелерді шифрлау үшін қарапайым алгоритм енгізу</variant>
<variant>Виртуалды карталарды байланыссыз өңдеу режимі</variant>
<variant>Құрылғы деректерін логикалық топтастыру әдістері</variant>
<variant>Желі пакеттерін ретпен тексеру модульдері</variant>

<question132>D-ID қай салада кеңінен пайдаланылады?</question132>
<variantright>Жасанды интеллект негізінде сөйлейтін бейне аватар жасау</variantright>
<variant>Ақпаратты архивтеудің мәдени жобаларын жүргізу</variant>
<variant>Талдау жүйелерінде үлкен деректерді құрылымдау</variant>
<variant>Робототехникада механизмдерді автоматтандыру</variant>
<variant>Қауіпсіздік жүйелерінде биометрикалық белгілеу</variant>

<question133>Speechma платформасының артықшылығы қандай?</question133>
<variantright>Дыбысты нақты анықтап мәтінді тиімді шығару</variantright>
<variant>Сандық карталарды жіктей отырып өңдеу</variant>
<variant>3D модельдерді жаңа форматтарда сақтауға</variant>
<variant>Видео материалдарды кодтау жүйесін басқару</variant>
<variant>Желі деректерін синтездеу параметрлерін қосу</variant>

<question134>Интерактивті визуализацияның негізгі мақсаты қандай?</question134>
<variantright>Деректерді қолданушыға динамикалық түрде түсінікті көрсету</variantright>
<variant>Файлдарды жүйелік каталогта құрылымдап бөлу</variant>
<variant>Сандық параметрлерді төмен деңгейде реттеу</variant>
<variant>Құрылғылар арасындағы сигналдарды бағыттау</variant>
<variant>Жүйелік процестерді аппараттық тексеру</variant>

<question135>ЖИ визуализация құралдарының басты артықшылығы неде?</question135>
<variantright>Үлкен деректерді автоматты талдап көрнекі шығару</variantright>
<variant>Графикалық файлдарды қолмен өңдеп сақтау</variant>
<variant>Құрылғыларды желілік топтарға байланыстыру</variant>
<variant>Бағдарламаларды кодтық деңгейде жіктеу</variant>
<variant>Сигналдарды аппараттық сүзгіден өткізу</variant>

<question136>ЖИ көмегімен тест немесе викторина жасаудың артықшылығы қандай?</question136>
<variantright>Сұрақтарды автоматты құрастырып мазмұнды реттеу</variantright>
<variant>Файлдарды кодтық форматта шифрлауға көмектесу</variant>
<variant>Желі құрылымдарын техникалық реттеуді орындау</variant>
<variant>Графикалық модульдерді аппараттық тексеруге</variant>
<variant>Құрылғыларды тұрақты режимде басқаруға</variant>

<question137>Интерактивті визуализациядағы графиктің ерекшелігі қандай?</question137>
<variantright>Қолданушы әрекетіне байланысты өзгеріп көрсетілуі</variantright>
<variant>Тек статикалық түрде өзгеріссіз берілуі</variant>
<variant>Төмен деңгейлі код арқылы құрылуы</variant>
<variant>Файл жүйесін бақылауға арналғаны</variant>
<variant>Желі ағындарын реттеуге арналғаны</variant>

<question138>Интерактивті карталар қайда қолданылады?</question138>
<variantright>Деректерді кеңістіктік форматта интерактивті көрсету</variantright>
<variant>Мәтіндік құжаттарды ретімен біріктіру</variant>
<variant>Құрылғыларды аппараттық режимде бөлу</variant>
<variant>Мультимедиа файлдарын қысу алгоритмдері</variant>
<variant>Сандық желілерді сигналдарға бөлу</variant>

<question139>ЖИ құралдары визуалды контентті қалай жақсартады?</question139>
<variantright>Деректерді автоматты талдап визуалды мазмұнды бейімдеу</variantright>
<variant>Жүйелік процестерді қолмен техникалық реттеу</variant>
<variant>Бағдарламаларды модульдік деңгейде бөлу</variant>
<variant>Кодтарды статикалық форматқа айналдыру</variant>
<variant>Файлдарды құрылымдық күйде ұйымдастыру</variant>

<question140>Интерактивті визуализацияда қолданылатын фильтр деген не?</question140>
<variantright>Қолданушыға деректерді таңдауға мүмкіндік беретін құрал</variantright>
<variant>Файлдарды шифрлайтын төмен деңгейлі модуль</variant>
<variant>Желі параметрлерін аппараттық реттеуші блок</variant>
<variant>Мәтіндік құжаттарды топтайтын модуль</variant>
<variant>Сандық белгілерді кодқа бөлетін жүйе</variant>

<question141>ЖИ визуализация платформалары қандай міндет атқарады?</question141>
<variantright>Деректерді талдап нәтижені көрнекі түрде ұсыну</variantright>
<variant>Қолданбаларды техникалық ақауларға бөлу</variant>
<variant>Желілік құрылғыларды физикалық реттеу</variant>
<variant>Кодтық процестерді синтаксистік өзгерту</variant>
<variant>Файл жүйесін аппараттық тексеру</variant>

<question142>Интерактивті визуализация қолдану қай салада тиімді?</question142>
<variantright>Білім беру процесінде материалды көрнекі түсіндіру</variantright>
<variant>Құрылғыларды техникалық режимде сынау</variant>
<variant>Мультимедианы арнайы кодтау</variant>
<variant>Жад жүйесін техникалық бөлу</variant>
<variant>Сигнал ағынын аппараттық реттеу</variant>

<question143>ЖИ құралдары қандай тест түрлерін жасай алады?</question143>
<variantright>Автоматты сұрақтары бар бейімделетін викториналарды</variantright>
<variant>Статикалық мәтіндік файлдармен шектелетін тесттерді</variant>
<variant>Тек жүйелік параметрлерді реттеуге арналған тесттерді</variant>
<variant>Аппараттық диагностика тесттерін арнайы форматта</variant>
<variant>Қолмен өзгертілетін механикалық тесттерді</variant>

<question144>Онлайн визуализация құралдары нені қамтамасыз етеді?</question144>
<variantright>Деректерді көпқырлы көрнекілікпен түсінікті ұсыну</variantright>
<variant>Файлдарды аппараттық деңгейде шифрлау</variant>
<variant>Желі құрылымдарын техникалық бақылау</variant>
<variant>Код блоктарын құрылымдық реттеу</variant>
<variant>Сандық жүйелерді механикалық тексеру</variant>

<question145>ЖИ арқылы тест құруда пайдаланылатын функция қандай?</question145>
<variantright>Сұрақтарды автоматты құрастыру алгоритмдерін қолдану</variantright>
<variant>Жүйелік процестерді аппараттық түрде бөлу</variant>
<variant>Құрылғы параметрлерін логикалық иерархиялау</variant>
<variant>Графикалық блоктарды кодтық деңгейде реттеу</variant>
<variant>Желі сигналдарын техникалық бақылау</variant>

<question146>Интерактивті визуализацияның қолданушыға әсері қандай?</question146>
<variantright>Ақпаратты оңай түсініп жылдам талдауға жағдай жасау</variantright>
<variant>Файлдарды офлайн форматта топтап сақтау</variant>
<variant>Құрылғыларды техникалық күйіне бөлу</variant>
<variant>Мультимедиа жүйелерін кодтау</variant>
<variant>Аппараттық ресурстарды бөлу</variant>

<question147>Визуализацияда ЖИ қолдану қандай нәтижеге әкеледі?</question147>
<variantright>Деректерді нақты, тиімді және бейімделген түрде көрсету</variantright>
<variant>Жад құрылымдарын техникалық реттеу</variant>
<variant>Файл жүйесін төмен деңгейде бақылау</variant>
<variant>Құрылғыларды аппараттық тексеруге</variant>
<variant>Желілік трафикті механикалық бөлу</variant>

<question148>Интерактивті тест платформалары не үшін қолданылады?</question148>
<variantright>Қолданушыға бейімделген автоматты сұрақтар ұсыну</variantright>
<variant>Файлдарды кодтық форматта сақтау</variant>
<variant>Құрылғылар арасын сигналмен бөлу</variant>
<variant>Жүйелік блоктарды құрылымдау</variant>
<variant>Мультимедиа деректерін шифрлау</variant>

<question149>Quizgecko платформасының негізгі мүмкіндігі қандай?</question149>
<variantright>Мәтіннен автоматты түрде тест сұрақтарын генерациялау</variantright>
<variant>Сандық файлдарды құрылымдық форматта архивтеу</variant>
<variant>Желі құрылғыларын аппараттық бақылау жүйесін құру</variant>
<variant>Мультимедиалық материалдарды офлайн күйде шифрлау</variant>
<variant>Құрылғылар арасындағы сигналдарды жүйелі реттеу</variant>

<question150>Educaplay платформасы не үшін кең қолданылады?</question150>
<variantright>Интерактивті оқу ойындары мен жаттығулар дайындау</variantright>
<variant>Техникалық құжаттарды кодтық деңгейде өңдеу</variant>
<variant>Желілік пакеттерді аппараттық деңгейде сүзгілеу</variant>
<variant>Жүйелік деректерді төмен деңгейде жіктеу</variant>
<variant>Құрылғылар арасындағы байланыстарды бөлу</variant>

<question151>Wayground қандай мүмкіндік ұсынады?</question151>
<variantright>Бейімделетін интерактивті тапсырмаларды онлайн жасау</variantright>
<variant>Мәтіндік файлдарды статикалық кестелерге түрлендіру</variant>
<variant>Сигналдарды аппараттық бақылау модульдерін қосу</variant>
<variant>Желі ағындарын техникалық деңгейде реттеу</variant>
<variant>Техникалық құрылғылардың кодтық моделін құру</variant>

<question152>Quiz Wizard құралының басты артықшылығы неде?</question152>
<variantright>Берілген мәтіннен жылдам форматталған викторина жасау</variantright>
<variant>Құрылғылар параметрлерін аппараттық бақылау</variant>
<variant>Жүйелік қателерді техникалық диагностикадан өткізу</variant>
<variant>Мультимедианы статикалық кодпен формалау</variant>
<variant>Желі деректерін құрылымдық блоктарға бөлу</variant>

<question153>Quizgecko қандай технологияға сүйенеді?</question153>
<variantright>Мәтінді талдап автоматты түрде сұрақтар шығаратын ЖИ</variantright>
<variant>Құрылғыларды жүйелік топқа бөлетін алгоритмдер</variant>
<variant>Мультимедиа файлдарын төмен деңгейде шифрлайтын код</variant>
<variant>Желі параметрлерін аппараттық бақылау жүйесі</variant>
<variant>Файлдарды құрылымдық каталогтарға бағыттайтын модуль</variant>

<question154>Educaplay қандай контент түрін құра алады?</question154>
<variantright>Интерактивті тесттерді, кроссвордтарды және ойын түрлерін</variantright>
<variant>Жүйелік процестерді аппараттық деңгейде бақылауды</variant>
<variant>Кодтық құрылымдарды төмен деңгейде реттеуді</variant>
<variant>Желілік параметрлерді техникалық форматтауды</variant>
<variant>Файлдарды құрылымдық түрде архивтеуді</variant>

<question155>Wayground платформасы білім беруде қалай қолданылады?</question155>
<variantright>Қолданушыға бейімделетін интерактивті оқу тапсырмаларын құру</variantright>
<variant>Желілік сигналдарды аппараттық түрде жіктеу</variant>
<variant>Бағдарламаларды кодтық деңгейде талдау</variant>
<variant>Файлдарды төмен деңгейде техникалық реттеу</variant>
<variant>Жүйелік процестерді диагностикалық бақылау</variant>

<question156>Quiz Wizard қандай жұмыс түрін автоматтандырады?</question156>
<variantright>Берілген мазмұннан құрылымды викторина жасақтау</variantright>
<variant>Құрылғылар арасындағы сигнал ағынын реттеу</variant>
<variant>Желі архитектурасын техникалық түрде бөлу</variant>
<variant>Файл жүйесін аппараттық деңгейде тексеру</variant>
<variant>Мәтіндік құжаттарды механикалық форматтау</variant>

<question157>Quizgecko арқылы қандай нәтиже алуға болады?</question157>
<variantright>Мәтіндік материалдан тиімді автоматты тест алу</variantright>
<variant>Желі параметрлерін аппараттық деңгейде түзету</variant>
<variant>Файлдардың құрылымын төмен деңгейде өзгерту</variant>
<variant>Код блоктарын диагностикалық жүйеде бөлу</variant>
<variant>Мультимедиа жүйесін статикалық форматтау</variant>

<question158>Educaplay пайдаланушыға қандай мүмкіншілік береді?</question158>
<variantright>Әртүрлі типтегі интерактивті оқу тапсырмаларын дайындау</variantright>
<variant>Сандық құрылғыларды техникалық режимге реттеу</variant>
<variant>Бағдарламаларды кодтық деңгейде талдау</variant>
<variant>Мультимедиа деректерін аппараттық шифрлау</variant>
<variant>Желі жүйесін төмен деңгейде бақылау</variant>

<question159>Жасанды интеллекттің маркетингтегі негізгі рөлі қандай?</question159>
<variantright>Деректерді талдау мен автоматтандыруды жақсарту</variantright>
<variant>Қызметкерлер санын азайту</variant>
<variant>Маркетологтарды толық алмастыру</variant>
<variant>Жарнама шығындарын көбейту</variant>
<variant>Барлық жарнаманы тоқтату</variant>

<question160>ЖИ негізіндегі жекелендірілген жарнама дегеніміз не?</question160>
<variantright>Әр тұтынушының қызығушылығына бейімделген жарнама</variantright>
<variant>Барлық пайдаланушыға бірдей жарнама</variant>
<variant>Дерексіз жасалған жарнама</variant>
<variant>Қолмен жасалған баннер</variant>
<variant>Тек әлеуметтік желіге арналған жарнама</variant>

<question161>Клиенттердің мінез-құлқын болжау үшін ЖИ қандай әдістерді қолданады?</question161>
<variantright>Нейрондық желілер</variantright>
<variant>Линейка</variant>
<variant>Калькулятор</variant>
<variant>Онлайн чат</variant>
<variant>Қолмен сауалнама</variant>

<question162>ЖИ маркетингтік кампанияларды әзірлеуде қалай көмектеседі?</question162>
<variantright>Деректерді талдап, аудиторияны сегменттеп, тиімді стратегия ұсынады</variantright>
<variant>Тек жарнама мәтінін жасайды</variant>
<variant>Тек сурет салумен айналысады</variant>
<variant>Жарнаманы автоматты түрде өшіреді</variant>
<variant>Бағдарламаны тек әлеуметтік желіге шығарады</variant>

<question163>Маркетингке арналған ЖИ құралын таңдаңыз:</question163>
<variantright>ChatGPT немесе Google Gemini</variantright>
<variant>Paint</variant>
<variant>Adobe Reader</variant>
<variant>WordPad</variant>
<variant>Excel</variant>

<question164>ЖИ-боттар маркетингте не үшін қолданылады?</question164>
<variantright>Клиенттермен сөйлесуді автоматтандыру үшін</variantright>
<variant>Жарнаманы тоқтату үшін</variant>
<variant>Тек ойын-сауық үшін</variant>
<variant>Қаржы құжаттарын сақтау үшін</variant>
<variant>Деректерді қолмен енгізу үшін</variant>

<question165>Жекелендірілген оқу тәжірибесі дегеніміз не?</question165>
<variantright>Оқушының деңгейі мен оқу қарқынына бейімделген білім беру</variantright>
<variant>Барлық оқушыға бірдей тапсырма беру</variant>
<variant>Тек қағазбен оқыту</variant>
<variant>Мұғалімсіз оқыту</variant>
<variant>Тек онлайн видеосабақ беру</variant>

<question166>ЖИ білім беруде қандай функция атқарады?</question166>
<variantright>Оқушының прогресін талдап, жеке ұсыныстар береді</variantright>
<variant>Оқушыларға сұрақ қоюға тыйым салады</variant>
<variant>Мұғалімнің орнын толық басады</variant>
<variant>Үй тапсырмасын көбейтеді</variant>
<variant>Тек тест сұрақтарын шығарады</variant>

<question167>ЖИ 21-ғасыр дағдыларын дамытуға қалай әсер етеді?</question167>
<variantright>Сын тұрғысынан ойлау, креативтілік, цифрлық сауаттылықты арттырады</variantright>
<variant>Тек спорттық дағдыларды дамытады</variant>
<variant>Тек жаттауға мәжбүрлейді</variant>
<variant>Қолөнерге үйретеді</variant>
<variant>Тек логикалық ойлауға көмектеседі</variant>

<question168>Қайсысы 21-ғасыр дағдыларына жатпайды?</question168>
<variantright>Ескі баспа машинкасымен теру</variantright>
<variant>Креативтілік</variant>
<variant>Коммуникация</variant>
<variant>Деректерді талдау</variant>
<variant>Цифрлық сауаттылық</variant>

<question169>ЖИ негізіндегі бейне редактор дегеніміз не?</question169>
<variantright>ЖИ арқылы автоматты монтаж, сапаны жақсарту және видео генерациялайтын құрал</variantright>
<variant>Барлық монтаж қолмен жасалатын бағдарлама</variant>
<variant>Музыка тыңдау қосымшасы</variant>
<variant>Құжаттарды оқу бағдарламасы</variant>
<variant>Фотосурет өңдеу бағдарламасы</variant>

<question170>ЖИ видеоны өңдеуде қалай көмектеседі?</question170>
<variantright>Рендерді жылдамдатады, қателерді автоматты түзетеді</variantright>
<variant>Видеоны нашарлатады</variant>
<variant>Дыбысты өздігінен өшіреді</variant>
<variant>Барлық видеоны ақ-қара түске айналдырады</variant>
<variant>Тек анимация қосады</variant>

<question171>ЖИ-видеоредактор платформасын таңдаңыз:</question171>
<variantright>CapCut AI немесе RunwayML</variantright>
<variant>Excel</variant>
<variant>Paint</variant>
<variant>Telegram</variant>
<variant>Word</variant>

<question172>ЖИ жарнаманың тиімділігін қалай арттырады?</question172>
<variantright>Нақты аудиторияны таңдап, бюджетті оңтайландырады</variantright>
<variant>Жарнаманы кездейсоқ етеді</variant>
<variant>Деректерді азайтады</variant>
<variant>Нәтижелерді жасырады</variant>
<variant>Тек мәтіндік жарнаманы жасайды</variant>

<question173>ЖИ маркетингтік кампания нәтижелерін қалай талдайды?</question173>
<variantright>Метрикаларды визуализациялап, трендтерді болжайды және ұсыныстар береді</variantright>
<variant>Деректерді кездейсоқ таңдайды</variant>
<variant>Статистиканы жасырады</variant>
<variant>Маркетологты алмастырады</variant>
<variant>Тек әлеуметтік желідегі пікірлерді талдайды</variant>

<question174>Қаржы саласында жасанды интеллекттің негізгі мақсаты қандай?</question174>
<variantright>Деректерді талдау, болжам жасау және тәуекелді бағалау</variantright>
<variant>Қаржы есептерін тек қолмен жүргізу</variant>
<variant>Банктерді толық алмастыру</variant>
<variant>Тек клиенттерге хабарлама жіберу</variant>
<variant>Қаржы операцияларын тоқтату</variant>

<question175>Қаржылық болжам жасау үшін ЖИ қандай әдістерді қолданады?</question175>
<variantright>Нейрондық желілер мен машиналық оқыту</variantright>
<variant>Қолмен есептеу</variant>
<variant>Қарапайым калькулятор</variant>
<variant>Ақшаны санау</variant>
<variant>Тек Excel формулалары</variant>

<question176>Тәуекелді бағалауда ЖИ қалай көмектеседі?</question176>
<variantright>Тарихи деректерді талдап, ықтимал шығындарды болжайды</variantright>
<variant>Барлық тәуекелді елемейді</variant>
<variant>Тек клиенттердің пікірін сұрайды</variant>
<variant>Банктік шоттарды жояды</variant>
<variant>Ақшаны көбейтеді</variant>

<question177>Қаржы чат-боты не үшін қолданылады?</question177>
<variantright>Тұтынушылардың сұрақтарына жауап беру және қызметтерді түсіндіру</variantright>
<variant>Банктік қызметкерлерді алмастыру үшін</variant>
<variant>Тек хабарламалар жіберу</variant>
<variant>Ақшаны автоматты түрде бөлу</variant>
<variant>Құжаттарды жою</variant>

<question178>Қайсысы ЖИ қаржы өнімдерін талдау үшін қолданылады?</question178>
<variantright>Машиналық оқыту модельдері</variantright>
<variant>Paint</variant>
<variant>Word</variant>
<variant>Excel тек формулалармен</variant>
<variant>Қарапайым калькулятор</variant>

<question179>Қаржы саласындағы болжамды талдауда қандай деректер қолданылады?</question179>
<variantright>Тарихи қаржылық деректер және нарық көрсеткіштері</variantright>
<variant>Тек ауа райы деректері</variant>
<variant>Әлеуметтік желі посттары</variant>
<variant>Музыкалық файлдар</variant>
<variant>Банк кестелері ғана</variant>

<question180>Қаржы тәуекелін бағалау кезінде ЖИ не істей алады?</question180>
<variantright>Тәуекелді болжайды және оны сандық түрде көрсетеді</variantright>
<variant>Барлық тәуекелді алып тастайды</variant>
<variant>Қаржылық деректерді өшіреді</variant>
<variant>Клиенттерді хабардар етпейді</variant>
<variant>Ақшаны көбейтеді</variant>

<question181>ЖИ-чат-боттар қаржылық қызмет көрсету кезінде қандай артықшылық береді?</question181>
<variantright>24/7 жұмыс істеп, сұрақтарға жылдам жауап береді</variantright>
<variant>Клиентпен тек телефон арқылы сөйлеседі</variant>
<variant>Банктік деректерді жояды</variant>
<variant>Тек хабарламаларды жазып алады</variant>
<variant>Ақшаны автоматты түрде шығарады</variant>

<question182>Қаржы саласында ЖИ қолданудың тағы бір мысалы?</question182>
<variantright>Сауда-саттық сигналдарын жасау және инвестициялық шешімдер ұсыну</variantright>
<variant>Тек қағаз есеп жүргізу</variant>
<variant>Тек веб-сайт жасау</variant>
<variant>Клиенттерге хат жазу</variant>
<variant>Тек салық есептерін шығару</variant>

<question183>Қаржы өнімдері туралы ақпаратты чат-бот арқылы беру неге тиімді?</question183>
<variantright>Клиенттің уақытын үнемдейді және сұрақтарға нақты жауап береді</variantright>
<variant>Банктің шығындарын көбейтеді</variant>
<variant>Барлық сұрақтарды елемейді</variant>
<variant>Ақшаны көбейтеді</variant>
<variant>Клиенттерді шектеу үшін</variant>

<question184>Қайсысы қаржы саласындағы ЖИ құралдарына жатады?</question184>
<variantright>Нейрондық желілер және машиналық оқыту модельдері</variantright>
<variant>Классикалық калькулятор</variant>
<variant>Paint бағдарламасы</variant>
<variant>Қағаз дәптер</variant>
<variant>Қарапайым браузер</variant>

<question185>ЖИ арқылы тәуекелді бағалаудың басты артықшылығы?</question185>
<variantright>Ықтимал шығындарды дәл болжау және шешім қабылдауға көмек</variantright>
<variant>Барлық инвестицияларды қауіпсіз етеді</variant>
<variant>Тек шығындарды көбейтеді</variant>
<variant>Қаржыны жояды</variant>
<variant>Клиенттердің сұрақтарына жауап бермейді</variant>

<question186>Қаржы саласында болжамды талдау не үшін қолданылады?</question186>
<variantright>Инвестициялық шешімдерді қолдау және нарық тенденцияларын болжау</variantright>
<variant>Тек маркетингтік хабарламалар үшін</variant>
<variant>Қарапайым есеп жүргізу үшін</variant>
<variant>Тек банктік шоттарды ашу үшін</variant>
<variant>Клиенттерді тексеру үшін</variant>

<question187>ЖИ қаржы саласында қандай жаңа мүмкіндіктер береді?</question187>
<variantright>Деректерді жинауға және талдауға жылдамдық қосады</variantright>
<variant>Банктік жүйелерді өшіреді</variant>
<variant>Ақшаны автоматты түрде шығарады</variant>
<variant>Клиенттерді шектеу үшін</variant>
<variant>Тек қағазбен есеп жүргізеді</variant>

<question188>Қаржы чат-ботын әзірлеуде ең маңызды қасиет?</question188>
<variantright>Тұтынушылардың сұрақтарына нақты және жылдам жауап беру қабілеті</variantright>
<variant>Тек банктік деректерді сақтау</variant>
<variant>Қолданушыға хабарлама жібермеу</variant>
<variant>Барлық функцияны қолмен орындау</variant>
<variant>Ақшаны көбейту</variant>

<question189>Recraft AI не үшін қолданылады?</question189>
<variantright>Мәтіндік контентті бейне немесе визуалды түрде қайта жасау</variantright>
<variant>Веб-сайт құру</variant>
<variant>Қарапайым калькулятор</variant>
<variant>Музыкалық композиция жасау</variant>
<variant>Құжаттарды оқу</variant>

<question190>Recraft AI-дің басты артықшылығы қандай?</question190>
<variantright>Мәтінді визуалды түрде қайта құрастыру және жекелендіру мүмкіндігі</variantright>
<variant>Жоғары дәлдіктегі бейне монтаж</variant>
<variant>Тек фото өңдеу</variant>
<variant>Ақшаны есептеу</variant>
<variant>Онлайн хабарламаларды жазу</variant>

<question191>Recraft AI қай салада жиі қолданылады?</question191>
<variantright>Маркетинг және медиа контент жасау</variantright>
<variant>Қаржы</variant>
<variant>Тек білім беру</variant>
<variant>Спорт</variant>
<variant>Ауыл шаруашылығы</variant>

<question192>Logo Diffusion не үшін қолданылады?</question192>
<variantright>Логотиптер мен брендтік визуалды элементтер жасау</variantright>
<variant>Веб-сайт құру</variant>
<variant>Музыка жасау</variant>
<variant>Деректерді талдау</variant>
<variant>Видео монтаж</variant>

<question193>Logo Diffusion платформасының басты ерекшелігі?</question193>
<variantright>ЖИ арқылы логотипті автоматты генерациялау</variantright>
<variant>Жоғары жылдамдықтағы видео өңдеу</variant>
<variant>Тек мәтінді аудару</variant>
<variant>Қаржы болжам жасау</variant>
<variant>Фото түсін өзгерту</variant>

<question194>Қай салада Logo Diffusion жиі қолданылады?</question194>
<variantright>Дизайн және маркетинг</variantright>
<variant>Қаржы</variant>
<variant>Медицина</variant>
<variant>Спорт</variant>
<variant>Білім беру</variant>

<question195>Ideogram AI негізгі функциясы қандай?</question195>
<variantright>Мәтіннен визуалды контент жасау</variantright>
<variant>Видео монтаж</variant>
<variant>Музыка генерациялау</variant>
<variant>Веб-сайт құру</variant>
<variant>Қаржы талдау</variant>

<question196>Ideogram AI қай салаға арналған?</question196>
<variantright>Бейнелеу өнері және маркетинг</variantright>
<variant>Тек қаржы</variant>
<variant>Спорт</variant>
<variant>Дәрігерлік</variant>
<variant>Құжаттарды тексеру</variant>

<question197>Ideogram AI-дің артықшылығы неде?</question197>
<variantright>ЖИ арқылы суреттерді мәтіннен жасау</variantright>
<variant>Тек фото өңдеу</variant>
<variant>Қолмен сурет салу</variant>
<variant>Ақшаны есептеу</variant>
<variant>Тек веб-сайт жасау</variant>

<question198>Meshy.ai платформасы не үшін қолданылады?</question198>
<variantright>3D объектілер мен анимациялар жасау</variantright>
<variant>Логотип жасау</variant>
<variant>Веб-сайт құру</variant>
<variant>Мәтін аудару</variant>
<variant>Қаржы талдау</variant>

<question199>Meshy.ai негізгі ерекшелігі?</question199>
<variantright>ЖИ арқылы 3D модельдерді автоматты генерациялау</variantright>
<variant>Тек фото өңдеу</variant>
<variant>Мәтіндік файлдарды құру</variant>
<variant>Қаржы болжам жасау</variant>
<variant>Музыка жасау</variant>

<question200>Meshy.ai көбінесе қай салада қолданылады?</question200>
<variantright>3D дизайн, ойын индустриясы, анимация</variantright>
<variant>Қаржы</variant>
<variant>Білім беру</variant>
<variant>Спорт</variant>
<variant>Тек мәтіндік контент</variant>

<question201>«Computer Vision» технологиясы жасанды интеллект саласында нені білдіреді?</question201>
<variantright>Бейнелерді өңдеу</variantright>
<variant>Виртуалды шындық</variant>
<variant>Деректерді сығу</variant>
<variant>Кванттық есептеулер</variant>
<variant>Аудионы тану</variant>

<question202>Жасанды жүйелердің айқын бағдарламалаусыз бейімделіп, жақсара алу қабілетін қандай термин сипаттайды?</question202>
<variantright>Машиналық оқыту</variantright>
<variant>Алдын ала анықталған логика</variant>
<variant>Статикалық оңтайландыру</variant>
<variant>Алгоритмдік детерминизм</variant>
<variant>Символдық есептеулер</variant>

<question203>Қандай машиналық оқыту әдісі классификация тапсырмасына жарайды?</question203>
<variantright>Тірек векторлар әдісі (SVM)</variantright>
<variant>Сызықтық регрессия</variant>
<variant>Градиенттік бустинг</variant>
<variant>Кластерлеу</variant>
<variant>Шешім ағашы</variant>

<question204>Қай тапсырма бақылаулы оқытуға жатады?</question204>
<variantright>Классификация</variantright>
<variant>Кластерлеу</variant>
<variant>Өлшемділікті азайту</variant>
<variant>Бақылаусыз оқу</variant>
<variant>Уақыттық қатарларды болжау</variant>

<question205>Терең нейрондық желілердегі функцияларды оңтайландыру үшін қандай алгоритм қолданылады?</question205>
<variantright>Қателікті кері тарату алгоритмі</variantright>
<variant>Кездейсоқ іздеу әдісі</variant>
<variant>Градиенттік түсу алгоритмі</variant>
<variant>Генетикалық алгоритмдер</variant>
<variant>Монте-Карло әдісі</variant>

<question206>Рекуррентті нейрондық желілер (RNN) тізбекті деректермен жұмыс істеу үшін нені пайдаланады?</question206>
<variantright>Циклдік кері байланыстар</variantright>
<variant>Градиенттік бустинг әдістері</variant>
<variant>Свертка қабаттары</variant>
<variant>Кездейсоқ салмақтар</variant>
<variant>Байес модельдері</variant>

<question207>Машиналық оқытудың қандай түрлері бар?</question207>
<variantright>Бақылаулы оқу, бақылаусыз оқу және нығайтумен оқу</variantright>
<variant>Сызықтық және сызықтық емес</variant>
<variant>Бір реттік және көп реттік</variant>
<variant>Терең және үстірт</variant>
<variant>Символдық және нейрондық</variant>

<question208>Деректердің маңызды ерекшеліктерін сақтай отырып өлшемділікті азайту үшін қандай әдіс қолданылады?</question208>
<variantright>Негізгі компоненттер әдісі (PCA)</variantright>
<variant>Кластерлеу</variant>
<variant>Свертка желілері</variant>
<variant>k-жақын көршілер алгоритмі</variant>
<variant>Логистикалық регрессия</variant>

<question209>Жасанды нейрондық желілердегі активация функциясы дегеніміз не?</question209>
<variantright>Нейрон кірістері негізінде оның шығыс сигналын анықтайтын математикалық функция</variantright>
<variant>Дәлдік метрикасы</variant>
<variant>Модель сапасын бағалау</variant>
<variant>Регуляризация</variant>
<variant>Оңтайландыру әдісі</variant>

<question210>Классификация тапсырмасында жиі қолданылатын машиналық оқыту әдісі қайсы?</question210>
<variantright>Тірек векторлар әдісі (SVM)</variantright>
<variant>Кластерлеу</variant>
<variant>Регрессия</variant>
<variant>Градиенттік бустинг</variant>
<variant>Шешім ағашы</variant>

<question211>Жасанды нейрондық желілердегі «нейрон» термині нені білдіреді?</question211>
<variantright>Жасанды нейрондық желінің негізгі құрылымдық бөлігі</variantright>
<variant>Сандық камераның негізгі компоненті</variant>
<variant>Элементар бөлшек</variant>
<variant>Электр тоғының өлшем бірлігі</variant>
<variant>Алгоритмдік өңдеу элементі</variant>

<question212>Бақылаусыз оқытуда деректердің жасырын құрылымын табу үшін қандай алгоритм пайдаланылады?</question212>
<variantright>Кластерлік талдау</variantright>
<variant>Сызықтық регрессия</variant>
<variant>k-жақын көрші әдісі</variant>
<variant>Градиенттік түсу</variant>
<variant>Байес классификаторы</variant>

<question213>Кескіндердегі образдарды тану үшін әдетте қандай нейрондық желі түрі қолданылады?</question213>
<variantright>Свертка нейрондық желілері (CNN)</variantright>
<variant>Спиральды нейрондық желілер</variant>
<variant>Рекуррентті нейрондық желілер</variant>
<variant>Көпқабатты персептрондар</variant>
<variant>Радиалды нейрондық желілер</variant>

<question214>Ақпарат жоғалтуды минимумға келтіре отырып, деректер өлшемін азайту үшін қандай әдіс пайдаланылады?</question214>
<variantright>Негізгі компоненттер әдісі (PCA)</variantright>
<variant>Тірек векторлар әдісі</variant>
<variant>Кластерлік талдау</variant>
<variant>Шешім ағаштары</variant>
<variant>Генетикалық алгоритмдер</variant>

<question215>Жасанды нейрондық желілерді оқытуда «жеделдетілген градиенттік түсу» қандай міндетті шешеді?</question215>
<variantright>Модель салмақтарын тез жаңартып, жинақталуды жеделдету</variantright>
<variant>Оқу деректерінің көлемін арттыру</variant>
<variant>Терең архитектураларды қолдану</variant>
<variant>Гиперпараметрлерді автоматты таңдау</variant>
<variant>Оқу итерацияларын азайту</variant>

<question216>Клиенттерге қызмет көрсетуде жасанды интеллекттің негізгі міндеті:</question216>
<variantright>Сұраныстарға тез жауап беру</variantright>
<variant>Сайт интерфейсін өзгерту</variant>
<variant>Дизайн жасау</variant>
<variant>Хаттарды жою</variant>
<variant>Жиналыс өткізу</variant>

<question217>Чат-бот қызметте не істейді?</question217>
<variantright>Клиенттерге автоматты түрде жауап береді</variantright>
<variant>Жарнаманы басқарады</variant>
<variant>Бағаларды өзгертеді</variant>
<variant>Есептерді оқиды</variant>
<variant>Серверлерді тексереді</variant>

<question218>Виртуалды көмекші деген не?</question218>
<variantright>Интерактивті көмек жүйесі</variantright>
<variant>Монтаж бағдарламасы</variant>
<variant>Деректер базасы</variant>
<variant>Сурет салу құралы</variant>
<variant>Сайтты қорғау құралы</variant>

<question219>Чат-боттың артықшылығы:</question219>
<variantright>24/7 қызмет көрсету</variantright>
<variant>Шектеулі жұмыс уақыты</variant>
<variant>Жоғары кідіріс</variant>
<variant>Бірөңкей жауаптар</variant>
<variant>Іске қосудың күрделілігі</variant>

<question220>Чат-боттардағы NLP не істейді?</question220>
<variantright>Адам тілін түсінеді</variantright>
<variant>Видео жасайды</variant>
<variant>Интернет жылдамдығын өлшейді</variant>
<variant>Дизайн жасайды</variant>
<variant>Құжаттарды басып шығарады</variant>

<question221>Intent (интент) деген не?</question221>
<variantright>Пайдаланушының ниеті</variantright>
<variant>Боттың аты</variant>
<variant>Интерфейс түсі</variant>
<variant>Батырма түрі</variant>
<variant>Чат режимі</variant>

<question222>Entity (сущность) деген не?</question222>
<variantright>Мәтіндегі маңызды параметр</variantright>
<variant>Сервер қатесі</variant>
<variant>Жарнамалық баннер</variant>
<variant>Хат түрі</variant>
<variant>Дизайн стилі</variant>

<question223>Компаниялар не үшін чат-боттарды қолданады?</question223>
<variantright>Қызметкерлерге түсетін жүктемені азайту үшін</variantright>
<variant>Жауап беру жылдамдығын азайту</variant>
<variant>Байланыс ақпаратын жасыру</variant>
<variant>Қақтығыстарды көбейту</variant>
<variant>Қызметті баяулату</variant>

<question224>Кодсыз платформалардың артықшылығы:</question224>
<variantright>Бағдарламалаусыз бот жасау мүмкіндігі</variantright>
<variant>Тек әзірлеушілерге арналған</variant>
<variant>C++ тілін қажет етеді</variant>
<variant>Күрделі серверлер керек</variant>
<variant>Тек ірі компанияларға арналған</variant>

<question225>ЖИ-бот оқыту кезінде не істейді?</question225>
<variantright>Диалог мысалдарын талдайды</variantright>
<variant>Клиенттерді жояды</variant>
<variant>Шрифтті өзгертеді</variant>
<variant>Желіні баптайды</variant>
<variant>Лицензияларды тексереді</variant>

<question226>Неліктен ЖИ клиенттердің қанағаттануын арттырады?</question226>
<variantright>Жылдам және дәл жауаптар</variantright>
<variant>Дәлсіз ұсыныстар</variant>
<variant>Ұзақ өңдеу уақыты</variant>
<variant>Қате жауаптар</variant>
<variant>Қолжетімсіздік</variant>

<question227>Омниканалды бот деген не?</question227>
<variantright>Барлық арналарда жұмыс істейді</variantright>
<variant>Тек чатта жұмыс істейді</variant>
<variant>Тек email-де</variant>
<variant>Тек Telegram-де</variant>
<variant>Тек CRM-де</variant>

<question228>FAQ-боттың негізгі функциясы:</question228>
<variantright>Жиі қойылатын сұрақтарға жауап беру</variantright>
<variant>Есептер жасау</variant>
<variant>Сатып алуды басқару</variant>
<variant>Бухгалтерия жүргізу</variant>
<variant>Ауысымдарды жоспарлау</variant>

<question229>Бот-консультант не істейді?</question229>
<variantright>Өнімді таңдауға көмектеседі</variantright>
<variant>Бағдарламаны орнатады</variant>
<variant>Жаңа вакансиялар</variant>
<variant>Клиенттің телефон нөмірін өзгертеді</variant>
<variant>Интернетті тексереді</variant>

<question230>Неліктен чат-боттар шығындарды азайтады?</question230>
<variantright>Рутинді тапсырмаларды автоматтандырады</variantright>
<variant>Қызметкерлер санын арттырады</variant>
<variant>Диалогтарды күрделендіреді</variant>
<variant>24 сағат оқытуды қажет етеді</variant>
<variant>Қамтуды азайтады</variant>

<question231>Чат-бот сценарийі деген не?</question231>
<variantright>Диалог логикасы</variantright>
<variant>Дизайн түсі</variant>
<variant>Оператор аты</variant>
<variant>Лицензия нөмірі</variant>
<variant>Құрылғы түрі</variant>

<question232>Эскалация кезінде бот не істейді?</question232>
<variantright>Диалогты операторға береді</variantright>
<variant>Чатты аяқтайды</variant>
<variant>Тақырыпты өзгертеді</variant>
<variant>Тарихты өшіреді</variant>
<variant>Тілді өзгертеді</variant>

<question233>ЖИ клиенттің эмоциясын қалай анықтайды?</question233>
<variantright>Мәтінді талдау арқылы</variantright>
<variant>GPS арқылы</variant>
<variant>Ауа райы арқылы</variant>
<variant>Профиль фотосы арқылы</variant>
<variant>Email арқылы</variant>

<question234>Дауысты тану жүйесі не істейді?</question234>
<variantright>Дауысты мәтінге аударады</variantright>
<variant>Экранды өзгертеді</variant>
<variant>Лог жасайды</variant>
<variant>Кодты өзгертеді</variant>
<variant>Чатты блоктайды</variant>

<question235>Дауыстық көмекшілер қашан қолданылады?</question235>
<variantright>Бос қол жоқ кезде</variantright>
<variant>Тек офисте</variant>
<variant>Тек түнде</variant>
<variant>Тек ойындарда</variant>
<variant>Тек төлем кезінде</variant>

<question236>Саудадағы чат-бот деген не?</question236>
<variantright>Автоматты сатушы</variantright>
<variant>Курьер</variant>
<variant>Бөлме менеджері</variant>
<variant>Сайт дизайнері</variant>
<variant>Қойма операторы</variant>

<question237>ЖИ операторларға қалай көмектеседі?</question237>
<variantright>Дайын жауаптарды ұсынады</variantright>
<variant>Чаттарды жояды</variant>
<variant>Өтініштерді жояды</variant>
<variant>Клиент профилін өзгертеді</variant>
<variant>Сайтты жабады</variant>

<question238>Әлсіз боттардың негізгі проблемасы:</question238>
<variantright>Сұраныстарды түсінбеу</variantright>
<variant>Өте жоғары дәлдік</variant>
<variant>Жылдам жауаптар</variant>
<variant>Қарапайым диалогтар</variant>
<variant>Нақты сценарийлер</variant>

<question239>Доставка қызметіндегі бот не істейді?</question239>
<variantright>Тапсырыс статусын көрсетеді</variantright>
<variant>Директорға қоңырау шалады</variant>
<variant>Қойма мекенжайын өзгертеді</variant>
<variant>Тапсырыстарды өшіреді</variant>
<variant>Бағаны орнатады</variant>

<question240>Операторлар үшін ЖИ-боттардың артықшылығы:</question240>
<variantright>Жүктемені азайту</variantright>
<variant>Қақтығыстарды арттыру</variant>
<variant>Сұраныстарды қайталау</variant>
<variant>Интерфейс қателері</variant>
<variant>Төмен жылдамдық</variant>

<question241>ЖИ персонализацияға қалай көмектеседі?</question241>
<variantright>Қажетті жауаптарды таңдайды</variantright>
<variant>Кездейсоқ деректерді көрсетеді</variant>
<variant>Кезек санын арттырады</variant>
<variant>Тарихты өшіреді</variant>
<variant>Чатты жабады</variant>

<question242>Қолдау бот не істейді?</question242>
<variantright>Техникалық мәселелерді шешеді</variantright>
<variant>Әкімші парольін өзгертеді</variant>
<variant>Сайтты жабады</variant>
<variant>Жиналыс өткізеді</variant>
<variant>Серверді өзгертеді</variant>

<question243>Неліктен боттың сөйлесу тондары маңызды?</question243>
<variantright>Клиентке әсер етеді</variantright>
<variant>Жүктемені жылдамдатады</variant>
<variant>Қамтуды азайтады</variant>
<variant>Мәзірді өшіреді</variant>
<variant>Батырмаларды жояды</variant>

<question244>Бот аналитикасы не істейді?</question244>
<variantright>Қызмет көрсету сапасын көрсетеді</variantright>
<variant>Жұмыс уақытын өзгертеді</variant>
<variant>Жеңілдіктер жасайды</variant>
<variant>Есептерді өшіреді</variant>
<variant>Пайдаланушыларды блоктайды</variant>

<question245>ЖИ-боттардың негізгі артықшылығы:</question245>
<variantright>Жылдам және дәл жауаптар</variantright>
<variant>Ұзақ үзілістер</variant>
<variant>Шектеулі қолжетімділік</variant>
<variant>Тұрақсыз жұмыс</variant>
<variant>Әлсіз бейімделу</variant>

<question246>Білім берудегі ЖИ-ның негізгі міндеті:</question246>
<variantright>Оқытуды персонализациялау</variantright>
<variant>Сабақ санын азайту</variant>
<variant>Студенттерді ауыстыру</variant>
<variant>Материалды күрделендіру</variant>
<variant>Оқытушылар санын қысқарту</variant>

<question247>Оқыту персонализациясы жүйесі не істейді?</question247>
<variantright>Оқушыға материал таңдайды</variantright>
<variant>Тапсырмаларды жояды</variant>
<variant>Кестені өзгертеді</variant>
<variant>Емтихандарды автоматты жасайды</variant>
<variant>Тақырыптарды жасырады</variant>

<question248>Адаптивті платформа не істейді?</question248>
<variantright>Оқушы деңгейіне бейімделеді</variantright>
<variant>Жарнама жасайды</variant>
<variant>Дизайнды өзгертеді</variant>
<variant>Сұрақтарды өшіреді</variant>
<variant>Тақырыптарды өшіреді</variant>

<question249>Оқыту ЖИ-tutor дегеніміз не?</question249>
<variantright>Виртуалды мұғалім</variantright>
<variant>Тест жүйесі</variant>
<variant>Дизайн бағдарламасы</variant>
<variant>Материал архиві</variant>
<variant>Электрондық кітапхана</variant>

<question250>Білімдегі ЖИ-ның артықшылығы:</question250>
<variantright>Жеке тәсіл</variantright>
<variant>Кездейсоқ тапсырмалар</variant>
<variant>Ұзақ кідірістер</variant>
<variant>Кері байланыс жоқ</variant>
<variant>Қате ұсыныстар</variant>

<question251>Ұсыныстар жүйесі не істейді?</question251>
<variantright>Қажетті контент ұсынады</variantright>
<variant>Бағаларды сұрыптайды</variant>
<variant>Қателіктерді өшіреді</variant>
<variant>Тақырыпты өзгертеді</variant>
<variant>Сабақты жылжытады</variant>

<question252>«Learning analytics» дегеніміз не?</question252>
<variantright>Оқу деректерін талдау</variantright>
<variant>Дипломдарды басып шығару</variant>
<variant>Кестелерді жасау</variant>
<variant>Құжаттарды жүктеу</variant>
<variant>Видеоны сақтау</variant>

<question253>ЖИ бағалауда не істейді?</question253>
<variantright>Тапсырмаларды автоматты тексереді</variantright>
<variant>Тақырыптарды қысқартады</variant>
<variant>Тесттерді өзгертеді</variant>
<variant>Бағаларды өшіреді</variant>
<variant>Студенттерді блоктайды</variant>

<question254>Неліктен ЖИ мотивацияны арттырады?</question254>
<variantright>Интерактивті тәсілді қамтиды</variantright>
<variant>Тапсырмаларды азайтады</variant>
<variant>Кері байланысты алып тастайды</variant>
<variant>Материалды қиындатады</variant>
<variant>Қолжетімділікті блоктайды</variant>

<question255>Виртуалды көмекші не істейді?</question255>
<variantright>Студенттердің сұрақтарына жауап береді</variantright>
<variant>Лекциялар жазады</variant>
<variant>Диплом жасайды</variant>
<variant>Материалдарды өшіреді</variant>
<variant>Желіні баптайды</variant>

<question256>«Адаптивті оқыту» деген не?</question256>
<variantright>Студентке бейімделетін оқыту</variantright>
<variant>Тек офлайн оқу</variant>
<variant>Кестеге сәйкес оқу</variant>
<variant>Интерактивсіз оқу</variant>
<variant>Тестсіз оқу</variant>

<question257>ЖИ онлайн курстарда не істейді?</question257>
<variantright>Оқыту жылдамдығын баптайды</variantright>
<variant>Емтихан өткізеді</variant>
<variant>Қолжетімділікті өзгертеді</variant>
<variant>Контентті азайтады</variant>
<variant>Студенттерді блоктайды</variant>

<question258>Оқытудағы чат-боттардың артықшылығы:</question258>
<variantright>24/7 көмек көрсету</variantright>
<variant>Ұзақ кідірістер</variant>
<variant>Күрделі жауаптар</variant>
<variant>Қолдау жоқ</variant>
<variant>Интерфейс қателері</variant>

<question259>Оқыту мониторинг жүйесі не өлшейді?</question259>
<variantright>Студенттің прогресін</variantright>
<variant>Интернет жылдамдығын</variant>
<variant>Оқытушылар санын</variant>
<variant>Ауа райын</variant>
<variant>Мәтін ұзындығын</variant>

<question260>Білім беру саласындағы Big Data дегеніміз не?</question260>
<variantright>Оқу процесі туралы үлкен деректер</variantright>
<variant>Үлкен видеолар</variant>
<variant>Жаңа компьютерлер</variant>
<variant>Үлкен сабақтар</variant>
<variant>Жылдық есептер</variant>

<question261>ЖИ әлсіз студенттерге қалай көмектеседі?</question261>
<variantright>Қосымша түсініктемелер береді</variantright>
<variant>Қолжетімділікті азайтады</variant>
<variant>Тақырыптарды жасырады</variant>
<variant>Мерзімдерді жылжытады</variant>
<variant>Қайталау мүмкіндігін өшіреді</variant>

<question262>Прогноздық аналитика жүйесі не істейді?</question262>
<variantright>Оқу нәтижелерін болжайды</variantright>
<variant>Тест жасайды</variant>
<variant>Бағаны азайтады</variant>
<variant>Пәндерді өзгертеді</variant>
<variant>Сұрақтарды өшіреді</variant>

<question263>Білім беру траекториясы дегеніміз не?</question263>
<variantright>Жеке оқу жолы</variantright>
<variant>Оқу құралы</variant>
<variant>Бір сабақ</variant>
<variant>Бір тест</variant>
<variant>Аудитория жоспары</variant>

<question264>Неліктен ЖИ оқытушының жұмысын жеңілдетеді?</question264>
<variantright>Рутинді тексерулерді автоматтандырады</variantright>
<variant>Есептер санын арттырады</variant>
<variant>Тапсырмаларды күрделендіреді</variant>
<variant>Студенттерді өшіреді</variant>
<variant>Ережелерді өзгертеді</variant>

<question265>Автоматты тест жасау жүйесі не істейді?</question265>
<variantright>Сұрақтарды генерациялайды</variantright>
<variant>Тақырыптарды азайтады</variant>
<variant>Қайталау мүмкіндігін өшіреді</variant>
<variant>Курсты өзгертеді</variant>
<variant>Қолжетімділікті шектейді</variant>

<question266>Дауысты тану жүйесі не істейді?</question266>
<variantright>Дауысты мәтінге аударады</variantright>
<variant>Дыбысты өзгертеді</variant>
<variant>Аудионы блоктайды</variant>
<variant>Диалогтарды өшіреді</variant>
<variant>Тілді өзгертеді</variant>

<question267>ЖИ-оқытушы көмекшісі не істейді?</question267>
<variantright>Тапсырмаларды тексеруге көмектеседі</variantright>
<variant>Кесте жасайды</variant>
<variant>Почтаны блоктайды</variant>
<variant>Емтихандар өткізеді</variant>
<variant>Емтиханды өзгертеді</variant>

<question268>ЖИ-пен VR-оқыту дегеніміз не?</question268>
<variantright>Виртуалды ортаға ену</variantright>
<variant>Фильм көру</variant>
<variant>Құжаттарды басып шығару</variant>
<variant>Драйверлерді орнату</variant>
<variant>Онлайн дүкен</variant>

<question269>Оқу бейнелерін ұсыну жүйесі не істейді?</question269>
<variantright>Қолайлы видеоларды таңдайды</variantright>
<variant>Курстың тақырыбын өзгертеді</variant>
<variant>Плейлистті азайтады</variant>
<variant>Бөлімдерді өшіреді</variant>
<variant>Видеоны блоктайды</variant>

<question270>Неліктен ЖИ өзін-өзі оқытуға көмектеседі?</question270>
<variantright>Кеңестер мен түсініктемелер береді</variantright>
<variant>Тақырыптарды өшіреді</variant>
<variant>Қолжетімділікті блоктайды</variant>
<variant>Күрделі нұсқуар береді</variant>
<variant>Ұзақ кідірістер тудырады</variant>

<question271>Көрсетілмейтін студенттерді анықтау жүйесі не істейді?</question271>
<variantright>Төмен нәтижеге тәуекелді анықтайды</variantright>
<variant>Аккаунтты өшіреді</variant>
<variant>Топты өзгертеді</variant>
<variant>Тесті блоктайды</variant>
<variant>Бағаны нөлге келтіреді</variant>

<question272>Learning Path деген не?</question272>
<variantright>Студенттің оқу жолы</variantright>
<variant>LMS паролі</variant>
<variant>Тақырыптар кестесі</variant>
<variant>Есеп формасы</variant>
<variant>Емтихан түрі</variant>

<question273>ЖИ оқытуды қалай тиімді етеді?</question273>
<variantright>Жеке ерекшеліктерді ескереді</variantright>
<variant>Материал санын азайтады</variant>
<variant>Курсты жабады</variant>
<variant>Тапсырмаларды жасырады</variant>
<variant>Қайталау мүмкіндігін өшіреді</variant>

<question274>ЖИ тіл үйретуде қалай көмектеседі?</question274>
<variantright>Грамматиканы тексереді</variantright>
<variant>Пернетақтаны өзгертеді</variant>
<variant>Аудармашыны орнатады</variant>
<variant>Сөздерді өшіреді</variant>
<variant>Аудионы өшіреді</variant>

<question275>Жеке оқытудың негізгі артықшылығы:</question275>
<variantright>Студентке жоғары бейімделу</variantright>
<variant>Барлығына бірдей тапсырмалар</variant>
<variant>Кездейсоқ тақырыптар</variant>
<variant>Күрделі материалдар</variant>
<variant>Кері байланыс жоқ</variant>

<question276>ЖИ енгізудің қоғамға оң әсерінің бірі қандай?</question276>
<variantright>Автоматтандыру мен еңбек тиімділігін арттыру</variantright>
<variant>Жұмыссыздықтың өсуі</variant>
<variant>Қол еңбегінің көбейуі және экологиялық көрсеткіштің өсуі</variant>
<variant>Есептеудің дәлдігінің төмендеуі</variant>
<variant>Технологиялық прогрестің баяулауы</variant>

<question277>ЖИ қолданудың мүмкін тәуекелі қандай?</question277>
<variantright>Жеке деректердің құпиялылығының бұзылуы және ағып кетуі</variantright>
<variant>Деректерді өңдеу жылдамдығының артуы</variant>
<variant>Қызмет көрсету сапасының өсуі</variant>
<variant>Медицина диагностикасының жақсаруы</variant>
<variant>Жүйелердің жауап беру уақытын қысқарту және ақпарат көлемінің өсуі</variant>

<question278>ЖИ дамуы талқыланатын әлеуметтік мәселе қандай?</question278>
<variantright>Жұмыс орындарының жоғалуы</variantright>
<variant>Электр энергиясының бағасының өсуі</variant>
<variant>Интернетке қол жетімсіздік</variant>
<variant>Халық санының өсуі</variant>
<variant>Азаматтардың табысының артуы</variant>

<question279>Қай салада ЖИ қоғамға оң әсерін тигізеді?</question279>
<variantright>Білім беру және жеке оқыту</variantright>
<variant>Алаяқтық және манипуляциялар</variant>
<variant>Дезинформация</variant>
<variant>Авторлық құқық бұзушылық</variant>
<variant>Киберқылмыс және желілік вирустар</variant>

<question280>Рутинді кеңсе жұмысына ЖИ енгізудің нақты немесе мүмкін әсері:</question280>
<variantright>Қайта оқытуды қажет етпейтін көптеген жаңа мамандықтарды жасау</variantright>
<variant>Қайталаушы тапсырмаларды автоматтандыру және бақылау мен ЖИ қызметін қолдауға қатысты дағдыларға сұраныстың өзгеруі</variant>
<variant>Барлық қызметкерлердің төрт күндік жұмыс аптасына көшуі</variant>
<variant>Клиенттерді қолдау саласындағы қызметкерлердің қажеттілігінің толық жойылуы</variant>
<variant>Жаңа жүйелерді енгізудің күрделілігі себебінен жалпы еңбек өнімділігінің төмендеуі</variant>

<question281>ЖИ экономикалық теңсіздікке қалай әсер етуі мүмкін?</question281>
<variantright>Тауарлар мен қызметтердің бағасын төмендету арқылы барлық тұрғындар үшін қолжетімді ету</variantright>
<variant>Барлық қалауынша программалау бойынша тегін білім беру</variant>
<variant>Автоматтандырудан түсетін табысты ЖИ технологияларын иеленушілер мен әзірлеушілер арасында шоғырландыру, ал төмен білікті еңбек құнының төмендеуі</variant>
<variant>Географияға қарамастан жоғары жалақы алатын мамандықтарға тең қолжетімділікті қамтамасыз ету</variant>
<variant>Төмен білікті қол еңбегін көбейту</variant>

<question282>ЖИ қоғамдағы коммуникацияға қалай әсер етеді?</question282>
<variantright>Ақпарат алмасу мен қарым-қатынасты жеңілдетеді</variantright>
<variant>Қарым-қатынас деңгейін төмендетеді</variant>
<variant>Тек видеойындар үшін пайдалы</variant>
<variant>Коммуникацияға әсер етпейді</variant>
<variant>Машиналарды қызмет көрсету</variant>

<question283>ЖИ саласында машиналық оқыту әдістерін қолданудың негізгі артықшылығы қандай?</question283>
<variantright>Деректердегі заңдылықтарды анықтау және шешімдер ұсыну</variantright>
<variant>Адам қатысуынсыз этикалық шешім қабылдау</variant>
<variant>Барлық тапсырмаларды толық және қателіксіз шешу</variant>
<variant>Адам эмоцияларын толық қайталау</variant>
<variant>Тек ойын-сауық және медиа саласында қолдану</variant>

<question284>ЖИ қоршаған ортаны қорғау саласында қалай қолданылады?</question284>
<variantright>Ауа сапасын мониторингтеу жүйелері</variantright>
<variant>Шығындардың көбеюі</variant>
<variant>Электр энергиясын тиімсіз пайдалану</variant>
<variant>Табиғатты жою</variant>
<variant>Өндірістік қуаттарды арттыру және шығындардың өсуі</variant>

<question285>ЖИ білім беру саласында неге мүмкіндік береді?</question285>
<variantright>Оқыту процесін персоналдау</variantright>
<variant>Барлық оқушыларға бірдей стандарт қамтамасыз ету</variant>
<variant>Сабақтарды қысқарту</variant>
<variant>Мұғалімдерді ауыстыру</variant>
<variant>Тек тесті автоматтандыру</variant>

<question286>ЖИ қоғамға қандай қауіп төндіруі мүмкін?</question286>
<variantright>Жұмыс орындарының жоғалуы</variantright>
<variant>Білім деңгейін арттыру</variant>
<variant>Қоршаған ортаға зиян</variant>
<variant>Денсаулыққа зиянды құрылғыларды кеңінен қолдану</variant>
<variant>Жұмыс орындарының көбеюі</variant>

<question287>Келесі жылдары ЖИ дамуының негізгі тенденциясы қандай деп саналады?</question287>
<variantright>ЖИ мен кванттық есептеулерді біріктіру</variantright>
<variant>Есептеу қуатының өсуін баяулату</variant>
<variant>Бұлттық технологиялардан бас тарту</variant>
<variant>Нейрондық желілерді қолдануды шектеу</variant>
<variant>Машиналық оқуға қызығушылықты төмендету</variant>

<question288>Explainable AI (XAI) дегеніміз не?</question288>
<variantright>Пайдаланушыға өз шешімдерін түсіндіре алатын ЖИ</variantright>
<variant>Оқыту қажет етпейтін ЖИ</variant>
<variant>Адам бақылаусыз толық автономды ЖИ</variant>
<variant>Тек дауыстық интерфейстермен шектелген ЖИ</variant>
<variant>Тек биологиялық деректерді қолданатын ЖИ</variant>

<question289>ЖИ қолдануда ең үлкен этикалық дауды тудыратын аспект қандай?</question289>
<variantright>Құпиялық пен деректерді қорғау</variantright>
<variant>Болжаудың дәлдігін арттыру</variant>
<variant>Өндірістік процестерді автоматтандыру</variant>
<variant>Аналитикалық мүмкіндіктерді кеңейту</variant>
<variant>Есептеу жылдамдығын арттыру</variant>

<question290>Адамның ойлау процесін имитациялаумен байланысты ЖИ болашақ бағыты қандай?</question290>
<variantright>Нейросимволдық ЖИ</variantright>
<variant>Биометриялық ЖИ</variant>
<variant>Трансформер желілері</variant>
<variant>Бұлттық машиналық оқыту</variant>
<variant>Кескіндерді терең оқыту</variant>

<question291>Генеративті ЖИ енгізудегі негізгі проблема қандай?</question291>
<variantright>Дезинформацияның таралу қаупі</variantright>
<variant>Еңбек өнімділігінің артуы</variant>
<variant>Шығармашылық мамандықтарға қызығушылықтың өсуі</variant>
<variant>Контент құнының төмендеуі</variant>
<variant>Деректер визуализациясының жақсаруы</variant>

<question292>Қай тренд этикалық және әділ ЖИге ұмтылысты көрсетеді?</question292>
<variantright>Жауапкершілікті стандарттарды әзірлеу</variantright>
<variant>Модельдердің көлемін арттыру</variant>
<variant>ЖИ-дің коммерциялануын жылдамдату</variant>
<variant>Қолданушы интерфейстерін жеңілдету</variant>
<variant>Техникалық қолдауды автоматтандыру</variant>

<question293>Қай бағыт ЖИ-дің үлкен деректер көлеміне тәуелділігін азайтуға көмектеседі?</question293>
<variantright>Аз мысалдармен оқыту</variantright>
<variant>Негізделген бақылаумен терең оқыту</variant>
<variant>Үлкен таңбаланған корпус қолдану</variant>
<variant>Қолмен пайдаланушы деректерін жинау</variant>
<variant>Классикалық алгоритмдерді қолдану</variant>

<question294>Қай технология болашақта нейрондық желілерді оқытуды радикалды түрде жылдамдатуы мүмкін?</question294>
<variantright>Кванттық есептеулер</variantright>
<variant>Оптикалық дискілер</variant>
<variant>Классикалық сервер кластерлері</variant>
<variant>Қолмен аннотациялау</variant>
<variant>Жергілікті есептеу түйіндері</variant>

<question295>Қай бағыт автономды жүйелерге қатысты, олар ортамен өзара әрекеттесу арқылы оқиды?</question295>
<variantright>Мықтандыру арқылы оқыту (Reinforcement Learning)</variantright>
<variant>Бақылаусыз оқыту</variant>
<variant>Терең конволюциялық желі</variant>
<variant>Табиғи тілді өңдеу</variant>
<variant>Уақыттық қатарларды талдау</variant>

<question296>Қай бағыт ЖИ мен Интернет заттарын (IoT) біріктіреді?</question296>
<variantright>Edge AI (шеткі ЖИ)</variantright>
<variant>Бұлтта терең оқыту</variant>
<variant>Орталықтандырылған есептеулер</variant>
<variant>Серверде деректерді талдау</variant>
<variant>Бұлттық аналитика</variant>

<question297>Қай бағыт ЖИ-дің визуалды, мәтіндік және дыбыстық мүмкіндіктерін бір жүйеге біріктіруді көздейді?</question297>
<variantright>Универсалды мультимодальды модельдер</variantright>
<variant>Монолингвальды тілдік модельдер</variant>
<variant>Сегменттелген нейрожелілер</variant>
<variant>Жергілікті оқыту жүйелері</variant>
<variant>Тек белгілі бір бағыттағы ЖИ</variant>

<question298>Қай болашақ тенденция ЖИ-ді адам орнына емес, серіктесі ретінде дамытуға бағытталған?</question298>
<variantright>«Адамға бағытталған ЖИ» концепциясы</variantright>
<variant>Жұмыс орындарын толық автоматтандыру</variant>
<variant>Адам қатысуын болдырмау</variant>
<variant>Қолданушымен өзара әрекеттесуді азайту</variant>
<variant>Шешім қабылдауды орталықтандыру</variant>

<question299>ЖИ мұғалімге қалай көмектеседі?</question299>
<variantright>Тапсырмаларды тексеруді автоматтандырады</variantright>
<variant>Білімді бақылау деңгейін төмендетеді</variant>
<variant>Тірі қарым-қатынасты жоққа шығарады</variant>
<variant>Материалды түсінуді төмендетеді</variant>
<variant>Коммуникацияда кедергі жасайды</variant>

<question300>Білім беруде ЖИ чат-боты деген не?</question300>
<variantright>Сұрақтарға жауап беретін көмекші</variantright>
<variant>Вирустардан қорғайтын құрал</variant>
<variant>Видео өңдеу құралы</variant>
<variant>Температураны бақылау құрылғысы</variant>
<variant>Дерекқорларды басқару механизмі</variant>
`;

let questions = [];
let currentSet = [];
let currentIndex = 0;
let score = 0;

function parseData() {
    const qBlocks = rawData.split(/<question\d+>/).filter(item => item.trim() !== "");
    questions = qBlocks.map(block => {
        const qText = block.split(/<\/question\d+>/)[0].trim();
        const rightAnswer = block.match(/<variantright>([\s\S]*?)<\/variantright>/)[1].trim();
        const wrongAnswers = [...block.matchAll(/<variant>([\s\S]*?)<\/variant>/g)].map(m => m[1].trim());
        return {
            question: qText,
            options: [rightAnswer, ...wrongAnswers],
            correct: rightAnswer
        };
    });
}

function initQuiz(start, end) {
    parseData();
    currentSet = questions.slice(start, end).sort(() => Math.random() - 0.5);
    currentIndex = 0;
    score = 0;
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const data = currentSet[currentIndex];
    document.getElementById('q-text').innerText = data.question;
    document.getElementById('progress-text').innerText = `Сұрақ: ${currentIndex + 1}/${currentSet.length}`;
    document.getElementById('bar-fill').style.width = `${((currentIndex + 1) / currentSet.length) * 100}%`;
    const optionsContainer = document.getElementById('options-list');
    optionsContainer.innerHTML = '';
    optionsContainer.style.pointerEvents = 'none'; // Басуды өшіру
    optionsContainer.style.opacity = '0.6'; // Визуалды түрде көрсету
    setTimeout(() => {
        optionsContainer.style.pointerEvents = 'auto';
        optionsContainer.style.opacity = '1';
    }, 200);
    const shuffledOptions = [...data.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.innerText = opt;
        div.onclick = () => checkAnswer(div, opt, data.correct);
        optionsContainer.appendChild(div);
    });
    
    document.getElementById('next-btn').classList.add('hidden');
}

function checkAnswer(element, selected, correct) {
    const allOptions = document.querySelectorAll('.option-item');
    allOptions.forEach(el => el.style.pointerEvents = 'none');
    if (selected === correct) {
        element.classList.add('correct');
        score++;
    } else {
        element.classList.add('wrong');
        allOptions.forEach(el => {
            if (el.innerText === correct) el.classList.add('correct');
        });
    }
    document.getElementById('next-btn').classList.remove('hidden');
}

function loadNextQuestion() {
    currentIndex++;
    if (currentIndex < currentSet.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('final-score').innerText = `${score}/${currentSet.length}`;
}

function restartQuiz() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
}
