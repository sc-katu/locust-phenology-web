// Explicit interface translations. Data values and administrative identifiers remain unchanged.
export const LANGUAGES=[['kk','Қазақша'],['en','English'],['ru','Русский']];
let current='kk';
try{const requested=new URLSearchParams(location.search).get('lang');const saved=typeof localStorage!=='undefined'?localStorage.getItem('locust-language'):null;if(['kk','en','ru'].includes(requested||saved))current=requested||saved;}catch{}
export const language=()=>current;
export function setLanguage(code,notify=true){if(!['kk','en','ru'].includes(code))return;current=code;try{localStorage.setItem('locust-language',code);}catch{}if(typeof document!=='undefined'){document.documentElement.lang=code;}if(notify&&typeof window!=='undefined')window.dispatchEvent(new Event('atlas-language-change'));}
const rows=`
Ретроспективный фенологический календарь вредных нестадных саранчовых Казахстана. Районные сроки отрождения, архивные личиночные стадии и пространственный анализ за 2003–2025 годы.|Қазақстанның үйір түзбейтін зиянды шегірткелерінің ретроспективті фенологиялық күнтізбесі. 2003–2025 жж. аудандық дернәсілдердің шығу мерзімдері, мұрағаттық сатылар және кеңістіктік талдау.|Retrospective phenology calendar of non-swarming grasshopper pests in Kazakhstan. District hatching dates, archived larval stages and spatial patterns, 2003–2025.
историческое сопоставление не установлено|тарихи сәйкестік анықталмаған|no historical match
Фенологический атлас · Казахстан|Фенологиялық атлас · Қазақстан|Phenology atlas · Kazakhstan
Фенологический атлас Казахстана|Қазақстанның фенологиялық атласы|Phenology atlas of Kazakhstan
Фенологический атлас|Фенологиялық атлас|Phenology atlas
Фенологический календарь саранчовых Казахстана|Қазақстан шегірткелерінің фенологиялық күнтізбесі|Kazakhstan grasshopper phenology calendar
Вредные нестадные саранчовые Казахстана|Қазақстанның үйір түзбейтін зиянды шегірткелері|Non-swarming grasshopper pests of Kazakhstan
Казахстан|Қазақстан|Kazakhstan
ИССЛЕДОВАТЕЛЬСКАЯ ПЛАТФОРМА|ЗЕРТТЕУ ПЛАТФОРМАСЫ|RESEARCH PLATFORM
ФИТОСАНИТАРНЫЙ МОНИТОРИНГ · 2003–2025|ФИТОСАНИТАРЛЫҚ МОНИТОРИНГ · 2003–2025|PHYTOSANITARY MONITORING · 2003–2025
Карта мониторинга|Мониторинг картасы|Monitoring map
Динамика по годам|Жылдар бойынша динамика|Annual dynamics
Пространственная картина|Кеңістіктік үлгі|Spatial patterns
Агроклиматические зоны|Агроклиматтық аймақтар|Agroclimatic zones
Методика и обоснование|Әдістеме және түсіндірме|Methods and interpretation
Исторические данные|Тарихи деректер|Historical data
Как пользоваться|Қалай пайдалану керек|How to use
Ретроспективный|Ретроспективті|Retrospective
районный календарь|аудандық күнтізбе|district calendar
АРХИВ МОНИТОРИНГА|МОНИТОРИНГ МҰРАҒАТЫ|MONITORING ARCHIVE
23 года полевых наблюдений|23 жылдық далалық бақылау|23 years of field observations
Республика Казахстан|Қазақстан Республикасы|Republic of Kazakhstan
Машинное обучение и ГИС|Машиналық оқыту және ГАЖ|Machine learning and GIS
в фитосанитарном мониторинге|фитосанитарлық мониторингте|in phytosanitary monitoring
Версия Streamlit|Streamlit нұсқасы|Streamlit version
Проект ИРН AP22784639|Жоба ЖТН AP22784639|Project IRN AP22784639
ИРН AP22784639|ЖТН AP22784639|IRN AP22784639
Типичная дата отрождения личинок по стране|Ел бойынша дернәсілдердің шығуының типтік күні|Typical national hatching date
Типичная дата отрождения личинок|Дернәсілдердің шығуының типтік күні|Typical larval hatching date
Типичная дата отрождения|Дернәсілдердің шығуының типтік күні|Typical hatching date
Многолетняя медиана по стране|Ел бойынша көпжылдық медиана|Long-term national median
Типичный исторический период|Типтік тарихи кезең|Typical historical period
Центральная половина зарегистрированных дат|Тіркелген күндердің орталық жартысы|Central half of recorded dates
Межгодовой разброс районных сроков|Аудандық мерзімдердің жылдар аралық өзгерісі|Between-year spread of district dates
Медианный районный межквартильный размах|Аудандық квартильаралық ауқымның медианасы|Median district interquartile range
Ориентир 2–3-го возраста|2–3-жас дернәсілдерге арналған бағдар|Historical 2nd–3rd instar window
Архивные даты личиночных стадий|Дернәсіл сатыларының мұрағаттық күндері|Archived larval stage dates
Календарь на карте|Картадағы күнтізбе|Phenology on the map
Выберите район, чтобы изучить его сроки и историю наблюдений.|Мерзімдер мен бақылау тарихын көру үшін ауданды таңдаңыз.|Select a district to explore its dates and observation history.
Скачать выборку|Іріктемені жүктеу|Download selection
Область / город|Облыс / қала|Region / city
Весь Казахстан|Бүкіл Қазақстан|All Kazakhstan
Агроклиматическая зона|Агроклиматтық аймақ|Agroclimatic zone
Все зоны|Барлық аймақ|All zones
Найти район|Ауданды іздеу|Find a district
Название района…|Аудан атауы…|District name…
Сбросить фильтры|Сүзгілерді тазарту|Reset filters
Сбросить|Тазарту|Reset
Сроки отрождения|Дернәсілдердің шығу мерзімі|Hatching dates
Устойчивость|Тұрақтылық|Stability
Группы LISA|Кеңістіктік топтар|Spatial groups
Агроклимат|Агроклимат|Agroclimate
Тематический слой|Тақырыптық қабат|Thematic layer
Интерактивная карта районов Казахстана|Қазақстан аудандарының интерактивті картасы|Interactive map of Kazakhstan districts
Приблизить карту|Картаны жақындату|Zoom in
Отдалить карту|Картаны алыстату|Zoom out
Показать весь Казахстан|Бүкіл Қазақстанды көрсету|Show all Kazakhstan
Развернуть карту|Картаны толық экранға ашу|Full screen
Скачать карту SVG|Картаны SVG пішімінде жүктеу|Download map as SVG
Административные единицы · Казахстан|Әкімшілік бірліктер · Қазақстан|Administrative units · Kazakhstan
Прокрутка — масштаб · Перетаскивание — перемещение|Айналдыру — масштаб · Сүйреу — жылжыту|Scroll to zoom · Drag to pan
Подписи областей|Облыс атаулары|Region labels
Приблизить выборку|Іріктемені жақындату|Zoom to selection
Карточка района|Аудан карточкасы|District profile
Выберите район на карте|Картадан ауданды таңдаңыз|Select a district on the map
Исторический ориентир.|Тарихи бағдар.|Historical reference.
Показатели описывают зарегистрированные сроки прошлых лет. Текущий возраст и численность личинок уточняются полевым обследованием.|Көрсеткіштер өткен жылдары тіркелген мерзімдерді сипаттайды. Дернәсілдердің қазіргі жасы мен саны далалық тексерумен анықталады.|Indicators describe dates recorded in previous years. Current larval instar and abundance require field verification.
История выбранного района|Таңдалған ауданның тарихы|Selected district history
Архивные даты по годам|Жылдар бойынша мұрағаттық күндер|Archived dates by year
Архивные операционные даты исторически сопоставленной административной единицы.|Тарихи деректермен сәйкестендірілген әкімшілік бірліктің мұрағаттық жедел бақылау күндері.|Archived operational dates for the historically matched administrative unit.
История района CSV|Аудан тарихы CSV|District history CSV
Районы текущей выборки|Ағымдағы іріктемедегі аудандар|Districts in the current selection
Как менялись сроки отрождения|Дернәсілдердің шығу мерзімдері қалай өзгерді|How hatching dates changed over time
Национальная ретроспектива зарегистрированных районных дат.|Тіркелген аудандық күндердің ұлттық ретроспективасы.|National retrospective of recorded district dates.
Данные CSV|Деректер CSV|Data CSV
Отрождение личинок по годам|Жылдар бойынша дернәсілдердің шығуы|Larval hatching by year
Медиана|Медиана|Median
Изучить год|Жылды қарау|Explore a year
Цветная полоса — центральная половина районных дат в каждом году. Это исторический фон для планирования обследований; график не является прогнозом на новый сезон.|Түсті жолақ — әр жылдағы аудандық күндердің орталық жартысы. Бұл тексерулерді жоспарлауға арналған тарихи негіз; график жаңа маусымға болжам бермейді.|The shaded band is the central half of district dates in each year. It provides historical context for survey planning, rather than a forecast for the next season.
Пространственная картина сроков|Мерзімдердің кеңістіктік үлгісі|Spatial patterns of timing
Ранние и поздние локальные группы в административно верифицированном массиве.|Әкімшілік сәйкестігі тексерілген деректердегі ерте және кеш жергілікті топтар.|Early and late local groups among verified administrative units.
Типичные сроки пространственных групп|Кеңістіктік топтардың типтік мерзімдері|Typical dates of spatial groups
Медиана и Q1–Q3|Медиана және Q1–Q3|Median and Q1–Q3
КАК ЧИТАТЬ КАРТУ|КАРТАНЫ ҚАЛАЙ ОҚУ КЕРЕК|READING THE MAP
Серый цвет имеет значение|Сұр түстің мағынасы|Understanding the grey areas
локальная ранняя или поздняя ассоциация с соседями не сохранила значимость после поправки на множественные проверки. В этой категории есть и ранние, и поздние районы.|көрші аудандармен ерте не кеш жергілікті байланыс көптік тексеруге түзетуден кейін мәнді болмады. Бұл санатта ерте де, кеш те аудандар бар.|the local early or late association with neighbours was not significant after adjustment for multiple testing. This category includes both early and late districts.
Нет исторического сопоставления:|Тарихи сәйкестік жоқ:|No historical match:
современный район показан на карте, но фенологическая дата ему не присваивается.|қазіргі аудан картада көрсетілген, бірақ оған фенологиялық күн берілмейді.|the current district is shown on the map, but no phenological date is assigned.
Основной ориентир — собственный районный интервал Q1–медиана–Q3.|Негізгі бағдар — ауданның өзіндік Q1–медиана–Q3 аралығы.|The main reference is the district’s own Q1–median–Q3 interval.
Состав агроклиматических зон|Агроклиматтық аймақтардың құрамы|Composition of agroclimatic zones
Доля районов, %|Аудандар үлесі, %|Share of districts, %
Различия между агроклиматическими зонами|Агроклиматтық аймақтар арасындағы айырмашылықтар|Differences among agroclimatic zones
Современная зональность как пространственный контекст районного календаря.|Қазіргі аймақтылық аудандық күнтізбенің кеңістіктік контексті ретінде.|Current zoning provides spatial context for district calendars.
Сводка CSV|Жиынтық CSV|Summary CSV
Распределение районных медиан|Аудандық медианалардың таралуы|Distribution of district medians
Наведите на зону для подробностей|Мәлімет алу үшін аймаққа меңзерді апарыңыз|Hover over a zone for details
Связь с агроклиматической зональностью является пространственной ассоциацией и не доказывает климатическую причинность. После учёта зон сохраняется выраженная остаточная пространственная структура.|Агроклиматтық аймақтылықпен байланыс — кеңістіктік ассоциация; ол климаттық себептілікті дәлелдемейді. Аймақтарды ескергенде де кеңістіктік құрылым сақталады.|The relationship with agroclimatic zoning is a spatial association and does not establish climatic causality. Spatial structure remains after accounting for zones.
Сводка по агроклиматическим зонам|Агроклиматтық аймақтар бойынша жиынтық|Summary by agroclimatic zone
Что измеряет календарь и как интерпретировать его результаты.|Күнтізбе нені көрсетеді және нәтижелерін қалай түсіндіруге болады.|What the calendar shows and how to interpret it.
Происхождение данных|Деректердің шығу тегі|Data provenance
ПРИНЦИП РАБОТЫ|ЖҰМЫС ҚАҒИДАСЫ|HOW IT WORKS
Архив|Мұрағат|Archive
Полевые оперативные записи 2003–2025 гг.|2003–2025 жж. далалық жедел жазбалар.|Operational field records, 2003–2025.
Сопоставление|Сәйкестендіру|Matching
Проверенная связь с современной геометрией|Қазіргі геометриямен тексерілген сәйкестік|Verified links to current boundaries
Календарь|Күнтізбе|Calendar
Районные медианы и межгодовой разброс|Аудандық медианалар және жылдар аралық өзгеріс|District medians and between-year spread
Контекст|Контекст|Context
Локальные группы и агроклиматические зоны|Жергілікті топтар және агроклиматтық аймақтар|Local groups and agroclimatic zones
Подтверждайте исторический ориентир текущими полевыми наблюдениями.|Тарихи бағдарды ағымдағы далалық бақылаулармен растаңыз.|Confirm the historical reference with current field observations.
НАЧАЛО РАБОТЫ|ЖҰМЫСТЫ БАСТАУ|GETTING STARTED
От карты к районному календарю|Картадан аудандық күнтізбеге|From the map to a district calendar
Выберите территорию|Аумақты таңдаңыз|Select an area
Укажите область, агроклиматическую зону или найдите район по названию.|Облысты, агроклиматтық аймақты таңдаңыз немесе аудан атауын іздеңіз.|Choose a region or agroclimatic zone, or search for a district by name.
Изучите сроки|Мерзімдерді қараңыз|Explore the dates
Нажмите на район. Карточка показывает типичную дату, квартильный период и архивные сроки 2–3-го возраста.|Ауданды басыңыз. Карточка типтік күнді, квартильдік кезеңді және 2–3-жас дернәсілдердің мұрағаттық мерзімдерін көрсетеді.|Click a district to see its typical date, quartile interval and archived 2nd–3rd instar dates.
Сравните контекст|Контексті салыстырыңыз|Compare the context
Переключайте слои карты, открывайте историю района и разделы пространственного анализа.|Карта қабаттарын ауыстырып, аудан тарихы мен кеңістіктік талдау бөлімдерін ашыңыз.|Switch map layers, open district histories and explore spatial patterns.
Сохраните результат|Нәтижені сақтаңыз|Save the results
Выгрузите выбранные районы или годовой ряд в CSV, а карту — в SVG.|Таңдалған аудандарды не жылдық қатарды CSV, картаны SVG пішімінде жүктеңіз.|Export selected districts or annual records as CSV and the map as SVG.
Открыть атлас|Атласты ашу|Explore the atlas
Перейти к содержанию|Мазмұнға өту|Skip to content
Открыть навигацию|Навигацияны ашу|Open navigation
Разделы платформы|Платформа бөлімдері|Platform sections
Закрыть|Жабу|Close
Загрузка проверенных данных…|Тексерілген деректер жүктелуде…|Loading verified data…
РАЙОННЫЙ КАЛЕНДАРЬ|АУДАНДЫҚ КҮНТІЗБЕ|DISTRICT CALENDAR
Для выбранного сочетания фильтров районов нет.|Таңдалған сүзгілерге сәйкес аудандар жоқ.|No districts match the selected filters.
Для выбранного сочетания фильтров объектов нет. Измените фильтры или сбросьте выборку.|Таңдалған сүзгілерге сәйкес нысандар жоқ. Сүзгілерді өзгертіңіз немесе іріктемені тазалаңыз.|No units match these filters. Change the filters or reset the selection.
Историческое сопоставление не установлено.|Тарихи сәйкестік анықталмаған.|No historical match has been established.
Историческое сопоставление не установлено|Тарихи сәйкестік анықталмаған|No historical match
Современный объект присутствует на карте, но надёжная связь один-к-одному с историческим рядом не подтверждена. Фенологические даты не присваиваются.|Қазіргі нысан картада бар, бірақ тарихи қатармен сенімді бір-біріне сәйкестігі расталмаған. Фенологиялық күндер берілмейді.|The current unit is shown, but a reliable one-to-one link to its historical series has not been confirmed. No phenological dates are assigned.
Зона не определена|Аймақ анықталмаған|Zone not identified
Пространственная группа дополняет собственный районный календарь.|Кеңістіктік топ ауданның өзіндік күнтізбесін толықтырады.|The spatial group complements the district’s own calendar.
Контекст NS-района|NS-ауданының контексті|Context for an NS district
Медиана зоны:|Аймақ медианасы:|Zone median:
Средний срок соседей:|Көршілердің орташа мерзімі:|Mean neighbour date:
Соседей:|Көрші аудандар:|Neighbours:
диапазон их медиан:|медианаларының ауқымы:|range of their medians:
Период Q1–Q3:|Q1–Q3 кезеңі:|Q1–Q3 interval:
Усиление обследований · Q1|Тексерулерді күшейту · Q1|Intensify surveys · Q1
2-й возраст · архив|2-жас дернәсілдер · мұрағат|2nd instar · archive
3-й возраст · архив|3-жас дернәсілдер · мұрағат|3rd instar · archive
Валидных лет отрождения|Шығу күні бар жарамды жылдар|Years with valid hatch dates
История наблюдений|Бақылаулар тарихы|Observation history
Межгодовой разброс · IQR|Жылдар аралық өзгеріс · IQR|Between-year spread · IQR
Межгодовой разброс, дни|Жылдар аралық өзгеріс, күн|Between-year spread, days
Межгодовой разброс|Жылдар аралық өзгеріс|Between-year spread
Пространственные группы|Кеңістіктік топтар|Spatial groups
Поздняя пространственная группа|Кеш мерзімдердің кеңістіктік тобы|Late spatial group
Ранняя пространственная группа|Ерте мерзімдердің кеңістіктік тобы|Early spatial group
Выраженный локальный кластер не выявлен|Мәнді жергілікті кластер анықталмаған|No significant local cluster
Локально более поздний выброс|Жергілікті кеш ауытқу|Locally later outlier
Локально более ранний выброс|Жергілікті ерте ауытқу|Locally earlier outlier
Локальный кластер не выявлен|Жергілікті кластер анықталмаған|No local cluster detected
Пространственная характеристика|Кеңістіктік сипаттама|Spatial characteristic
Статус сопоставления|Сәйкестендіру мәртебесі|Historical linkage status
Сопоставление установлено|Сәйкестік анықталған|Historical match established
Типичный период Q1–Q3|Типтік Q1–Q3 кезеңі|Typical Q1–Q3 interval
Типичный период|Типтік кезең|Typical interval
Типичная дата|Типтік күн|Typical date
2-й возраст, DOY|2-жас дернәсілдер, DOY|2nd instar, DOY
3-й возраст, DOY|3-жас дернәсілдер, DOY|3rd instar, DOY
2-й возраст|2-жас дернәсілдер|2nd instar
3-й возраст|3-жас дернәсілдер|3rd instar
Годовая история недоступна: историческое сопоставление не установлено.|Жылдық тарих қолжетімсіз: тарихи сәйкестік анықталмаған.|Annual history is unavailable: no historical match has been established.
Годовая история отсутствует.|Жылдық тарих жоқ.|Annual history is unavailable.
Сдвиг от общей медианы|Жалпы медианадан ауытқу|Deviation from the overall median
Районов в годовой сводке|Жылдық жиынтықтағы аудандар|Districts in the annual summary
Период Q1–Q3|Q1–Q3 кезеңі|Q1–Q3 interval
Национальные сроки отрождения по годам, 2003–2025|2003–2025 жж. ел бойынша дернәсілдердің шығу мерзімдері|National hatching dates by year, 2003–2025
Отрождение, DOY|Дернәсілдердің шығуы, DOY|Hatching, DOY
Отрождение|Дернәсілдердің шығуы|Hatching
История района|Аудан тарихы|District history
Ранняя группа|Ерте топ|Early group
Поздняя группа|Кеш топ|Late group
Кластер не выявлен|Кластер анықталмаған|No cluster detected
Медианы и квартильные интервалы пространственных групп|Кеңістіктік топтардың медианалары мен квартильдік аралықтары|Medians and quartile intervals of spatial groups
Доли ранних, поздних и NS групп внутри агроклиматических зон|Агроклиматтық аймақтардағы ерте, кеш және NS топтарының үлестері|Shares of early, late and NS groups within agroclimatic zones
Распределение многолетних районных медиан по агроклиматическим зонам|Агроклиматтық аймақтар бойынша көпжылдық аудандық медианалардың таралуы|Distribution of long-term district medians by agroclimatic zone
Нажмите для просмотра на карте|Картадан көру үшін басыңыз|Click to view on the map
Агроклиматический класс · нажмите на распределение, чтобы открыть зону на карте|Агроклиматтық класс · картада ашу үшін таралуды басыңыз|Agroclimatic class · click a distribution to view the zone on the map
Аридная / тёплая|Қуаң / жылы|Arid / warm
Аридная / жаркая|Қуаң / ыстық|Arid / hot
Полуаридная / умеренно тёплая|Жартылай қуаң / қоңыржай жылы|Semi-arid / moderately warm
Полуаридная / тёплая|Жартылай қуаң / жылы|Semi-arid / warm
Полуаридная / жаркая|Жартылай қуаң / ыстық|Semi-arid / hot
Увлажнённая / умеренно тёплая|Ылғалды / қоңыржай жылы|Humid / moderately warm
Увлажнённая / жаркая|Ылғалды / ыстық|Humid / hot
Очень увлажнённая / умеренно тёплая|Өте ылғалды / қоңыржай жылы|Very humid / moderately warm
Горная В|Таулы Ш|Mountainous E
Горная ЮВ|Таулы ОШ|Mountainous SE
Горная Ю|Таулы О|Mountainous S
Не определена|Анықталмаған|Not identified
ПРОСТРАНСТВЕННЫЙ КОНТЕКСТ|КЕҢІСТІКТІК КОНТЕКСТ|SPATIAL CONTEXT
Зоны и районные сроки|Аймақтар және аудандық мерзімдер|Zones and district timing
Ранние и поздние группы согласуются с общим пространственным градиентом сроков. Агроклиматические зоны отражают часть этого градиента, но не заменяют районный календарь.|Ерте және кеш топтар мерзімдердің жалпы кеңістіктік градиентімен үйлеседі. Агроклиматтық аймақтар оның бір бөлігін көрсетеді, бірақ аудандық күнтізбені алмастырмайды.|Early and late groups follow the broad spatial gradient in timing. Agroclimatic zones reflect part of this pattern but do not replace district calendars.
Даже внутри одной зоны сроки различаются. Поэтому для планирования обследований используйте собственный период Q1–Q3 выбранного района.|Бір аймақтың ішінде де мерзімдер өзгеше. Сондықтан тексерулерді жоспарлау үшін таңдалған ауданның өзіндік Q1–Q3 кезеңін пайдаланыңыз.|Dates differ even within the same zone. Plan surveys using the selected district’s own Q1–Q3 interval.
Группа на карте — дополнительный контекст. NS означает отсутствие значимой локальной группы, а не отсутствие наблюдений.|Картадағы топ — қосымша контекст. NS бақылаулардың жоқтығын емес, мәнді жергілікті топтың анықталмағанын білдіреді.|The map group adds context. NS means no significant local group was detected; observations are still available.
Как читать календарь|Күнтізбені қалай оқу керек|Reading the calendar
Многолетняя медиана зарегистрированных дат отрождения личинок в районе.|Ауданда тіркелген дернәсілдердің шығу күндерінің көпжылдық медианасы.|The long-term median of recorded larval hatching dates in a district.
Центральная половина исторических дат. Интервал помогает планировать обследования.|Тарихи күндердің орталық жартысы. Аралық тексерулерді жоспарлауға көмектеседі.|The central half of historical dates, used as a reference for survey planning.
Разность Q3 и Q1 в днях. Меньшее значение означает более устойчивые сроки.|Q3 пен Q1 айырмасы, күнмен. Мән аз болған сайын мерзім тұрақтырақ.|Q3 minus Q1, in days. Smaller values indicate more stable timing.
2–3-й возраст|2–3-жас дернәсілдер|2nd–3rd instars
Ориентиры из архивных записей соответствующего района, а не фиксированная прибавка дней.|Сол ауданның мұрағаттық жазбаларынан алынған бағдарлар; олар күндердің тұрақты санын қосу арқылы есептелмейді.|References from the district’s own archived records, rather than fixed offsets added to hatching dates.
Что означают группы на карте|Картадағы топтар нені білдіреді|Understanding map groups
— локальная группа относительно ранних сроков.|— салыстырмалы ерте мерзімдердің жергілікті тобы.|— a local group with relatively early dates.
— локальная группа относительно поздних сроков. Группы определены с учётом соседних районов и статистической значимости.|— салыстырмалы кеш мерзімдердің жергілікті тобы. Топтар көрші аудандар мен статистикалық мәнділікті ескере отырып анықталған.|— a local group with relatively late dates. Groups account for neighbouring districts and statistical significance.
— значимая локальная группа не выявлена. Это не означает отсутствие данных или средний срок: используйте собственный календарь района.|— мәнді жергілікті топ анықталмаған. Бұл деректердің жоқтығын не орташа мерзімді білдірмейді: ауданның өзіндік күнтізбесін пайдаланыңыз.|— no significant local group was detected. This does not mean missing data or average timing: use the district’s own calendar.
Штриховкой отмечены современные районы без надёжного исторического сопоставления. Фенологические даты им не присваиваются.|Штрихпен сенімді тарихи сәйкестігі жоқ қазіргі аудандар белгіленген. Оларға фенологиялық күндер берілмейді.|Hatching marks indicate current districts without a reliable historical match. No phenological dates are assigned to them.
Данные и охват|Деректер және қамту|Data and coverage
Материалы фитосанитарного мониторинга за 2003–2025 гг. На карте — 218 современных административных единиц; для 196 подтверждено сопоставление с историческими записями, для 22 даты не присваиваются.|2003–2025 жж. фитосанитарлық мониторинг материалдары. Картада 218 қазіргі әкімшілік бірлік бар; 196 бірліктің тарихи жазбалармен сәйкестігі расталған, 22 бірлікке күндер берілмейді.|Phytosanitary monitoring records for 2003–2025. The map contains 218 current administrative units: 196 have verified historical links, while 22 are not assigned dates.
Агроклиматические зоны дают региональный контекст. Они не заменяют районные данные и сами по себе не доказывают причинную связь с климатом.|Агроклиматтық аймақтар өңірлік контекст береді. Олар аудандық деректерді алмастырмайды және өздігінен климатпен себептік байланысты дәлелдемейді.|Agroclimatic zones provide regional context. They do not replace district data or establish climatic causality on their own.
Практическое использование|Практикалық пайдалану|Practical use
Календарь помогает заранее выбрать период усиления обследований. Текущие сроки, возраст и численность личинок уточняются в поле.|Күнтізбе тексерулерді күшейту кезеңін алдын ала таңдауға көмектеседі. Ағымдағы мерзімдер, дернәсілдердің жасы мен саны далада нақтыланады.|The calendar helps identify when to intensify surveys. Current timing, larval instar and abundance are verified in the field.
Это исторический аналитический инструмент. Он не прогнозирует новый сезон и не назначает обработки.|Бұл тарихи талдау құралы. Ол жаңа маусымға болжам жасамайды және өңдеу шараларын тағайындамайды.|This is a historical analytical tool. It does not forecast a new season or prescribe treatments.
О проекте|Жоба туралы|About the project
РАЗРАБОТЧИК|ӘЗІРЛЕУШІ|DEVELOPER
Руководитель лаборатории искусственного интеллекта|Жасанды интеллект зертханасының жетекшісі|Head of AI Laboratory
Казахский агротехнический исследовательский университет имени С. Сейфуллина|С. Сейфуллин атындағы Қазақ агротехникалық зерттеу университеті|S. Seifullin Kazakh Agrotechnical Research University
Разработка моделей фитосанитарного прогнозирования популяции вредных нестадных саранчовых в Казахстане на основе машинного обучения и ГИС.|Машиналық оқыту және ГАЖ негізінде Қазақстандағы үйір түзбейтін зиянды шегірткелер популяциясын фитосанитарлық болжау модельдерін әзірлеу.|Development of phytosanitary forecasting models for non-swarming grasshopper pest populations in Kazakhstan using machine learning and GIS.
Нет исторического сопоставления|Тарихи сәйкестік жоқ|No historical match
Районов|Аудан саны|Districts
Район|Аудан|District
Год|Жыл|Year
Медиана, DOY|Медиана, DOY|Median, DOY
Медиана, дата|Медиана, күн|Median date
медиана|медиана|median
диапазон|ауқым|range
районов|аудан|districts
района|аудан|district
с историческим сопоставлением|тарихи сәйкестігі бар|historically matched
объектов|нысан|units
из|ішінен|of
дней|күн|days
дня|күн|days
день|күн|day
дн.|күн|days
апр.|сәу.|Apr
апреля|сәуір|April
мая|мамыр|May
нет данных|деректер жоқ|no data
Загрузка|Жүктеу|Loading
В этом браузере полноэкранный режим недоступен. Используйте масштаб страницы.|Бұл браузерде толық экран режимі қолжетімсіз. Бет масштабын пайдаланыңыз.|Full-screen mode is unavailable in this browser. Use page zoom instead.
Не удалось открыть данные атласа.|Атлас деректерін ашу мүмкін болмады.|Unable to load atlas data.
Не удалось загрузить|Жүктеу мүмкін болмады|Unable to load
Проверьте подключение и обновите страницу.|Байланысты тексеріп, бетті жаңартыңыз.|Check your connection and refresh the page.
Попробовать снова|Қайта көру|Try again
`.trim().split('\n').map(r=>r.split('|'));
const dictionaries={kk:new Map(rows.map(([ru,kk])=>[ru,kk])),en:new Map(rows.map(([ru,,en])=>[ru,en]))};
let replacements={kk:null,en:null};
export function registerPlaces(rows){for(const r of rows){for(const level of ['ADM1','ADM2']){const ru=r[level+'_RU'];if(!ru)continue;dictionaries.kk.set(ru,r[level+'_KK']||ru);dictionaries.en.set(ru,r[level+'_EN']||ru);}const ru=r.ADM1_RU;if(ru){const short=ru.replace(' область','').replace('область ','');dictionaries.kk.set(short,(r.ADM1_KK||ru).replace(' облысы','').replace(' қаласы',''));dictionaries.en.set(short,(r.ADM1_EN||ru).replace(' Region',''));}}dictionaries.kk.set('ВКО','ШҚО');dictionaries.en.set('ВКО','East Kazakhstan');dictionaries.kk.set('ЗКО','БҚО');dictionaries.en.set('ЗКО','West Kazakhstan');dictionaries.kk.set('СКО','СҚО');dictionaries.en.set('СКО','North Kazakhstan');replacements={kk:null,en:null};}
const escapeRegExp=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
export function tr(text){if(current==='ru'||text==null)return String(text??'');if(!replacements[current]){const dict=dictionaries[current];replacements[current]=new RegExp([...dict.keys()].sort((a,b)=>b.length-a.length).map(escapeRegExp).join('|'),'g');}return String(text).replace(replacements[current],s=>dictionaries[current].get(s));}
const originals=new WeakMap();
export function localizeDOM(root=document.body){if(typeof document==='undefined')return;const visit=node=>{if(node.nodeType===3){const prior=originals.get(node);const source=prior&&node.nodeValue===prior.last?prior.source:node.nodeValue;const next=tr(source);originals.set(node,{source,last:next});if(node.nodeValue!==next)node.nodeValue=next;}else if(node.nodeType===1){if(['SCRIPT','STYLE'].includes(node.tagName))return;for(const attr of ['title','aria-label','placeholder','content']){if(!node.hasAttribute(attr))continue;let map=originals.get(node);if(!map){map={};originals.set(node,map);}const value=node.getAttribute(attr),prior=map[attr];const source=prior&&value===prior.last?prior.source:value;const next=tr(source);map[attr]={source,last:next};if(value!==next)node.setAttribute(attr,next);}for(const child of [...node.childNodes])visit(child);}};visit(root);}
export function observeTranslations(){localizeDOM(document.documentElement);if(typeof MutationObserver==='undefined')return;const observer=new MutationObserver(()=>{observer.disconnect();localizeDOM(document.documentElement);observer.observe(document.body,{subtree:true,childList:true,characterData:true});});observer.observe(document.body,{subtree:true,childList:true,characterData:true});}
