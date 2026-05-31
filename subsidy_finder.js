var supportFinderData = [
  {
    title: "근로장려금",
    subtitle: "일하는 저소득 가구를 위한 근로 장려 지원",
    category: "근로·소득지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "근로소득, 사업소득, 종교인소득이 있는 저소득 가구",
    amount: "단독 최대 165만 원 / 홑벌이 285만 원 / 맞벌이 330만 원",
    deadline: "정기신청",
    status: "신청기간확인",
    description: "소득이 낮은 근로자, 사업자, 종교인 가구의 생활 안정을 돕기 위해 지급되는 국세청 장려금 제도입니다.",
    source: "국세청",
    link: "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7781&mi=2450"
  },
  {
    title: "자녀장려금",
    subtitle: "저소득 가구의 자녀 양육 부담 완화",
    category: "출산·육아",
    age: ["20대", "30대", "40대", "50대"],
    region: ["전국"],
    target: "부양자녀가 있는 저소득 홑벌이·맞벌이 가구",
    amount: "자녀 1인당 최대 100만 원",
    deadline: "정기신청",
    status: "신청기간확인",
    description: "자녀를 양육하는 저소득 가구의 양육 부담을 줄이기 위해 지급되는 국세청 장려금 제도입니다.",
    source: "국세청",
    link: "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7782&mi=2451"
  },
  {
    title: "보조금24 맞춤 혜택 조회",
    subtitle: "내가 받을 수 있는 정부 혜택 통합 조회",
    category: "정부지원금",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "정부 지원 혜택을 확인하려는 모든 국민",
    amount: "개인별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "정부24에서 본인과 가족이 받을 수 있는 정부 혜택을 한 번에 확인할 수 있는 공식 서비스입니다.",
    source: "정부24",
    link: "https://plus.gov.kr/"
  },
  {
    title: "청년월세 지원사업",
    subtitle: "무주택 청년 월세 부담 완화",
    category: "청년·주거",
    age: ["20대", "30대"],
    region: ["전국"],
    target: "부모와 별도 거주하는 무주택 청년",
    amount: "월세 일부 지원",
    deadline: "신청기간확인",
    status: "신청기간확인",
    description: "청년층의 주거비 부담을 줄이기 위해 월세 일부를 지원하는 복지로 안내 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004661"
  },
  {
    title: "국민내일배움카드",
    subtitle: "직업능력개발 훈련비 지원",
    category: "교육·훈련",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "직업훈련이 필요한 국민",
    amount: "5년간 300만 원 기본 지원",
    deadline: "상시신청",
    status: "상시접수",
    description: "취업이나 직무수행에 필요한 교육·훈련 비용을 지원받을 수 있는 고용24 직업훈련 제도입니다.",
    source: "고용24",
    link: "https://www.work24.go.kr/hr/h/a/1100/selectIssuGudn.do"
  },
  {
    title: "국민취업지원제도",
    subtitle: "구직자 취업지원 및 소득지원",
    category: "취업·구직",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "취업을 희망하는 구직자",
    amount: "대상 유형별 차등 지원",
    deadline: "상시신청",
    status: "상시접수",
    description: "취업을 원하는 국민에게 취업지원서비스와 생계 안정을 위한 소득지원을 제공하는 제도입니다.",
    source: "고용24",
    link: "https://www.work24.go.kr/"
  },
  {
    title: "청년도약계좌",
    subtitle: "청년 중장기 자산형성 지원",
    category: "청년·자산형성",
    age: ["20대", "30대"],
    region: ["전국"],
    target: "일정 소득 기준을 충족하는 청년",
    amount: "정부기여금 및 비과세 혜택",
    deadline: "운영일정확인",
    status: "신청기간확인",
    description: "청년의 중장기 자산 형성을 돕기 위한 정책 금융 상품입니다.",
    source: "서민금융진흥원",
    link: "https://www.kinfa.or.kr/"
  },
  {
    title: "청년내일저축계좌",
    subtitle: "일하는 저소득 청년 자산형성 지원",
    category: "청년·자산형성",
    age: ["20대", "30대"],
    region: ["전국"],
    target: "근로활동 중인 저소득 청년",
    amount: "본인저축액에 정부지원금 매칭",
    deadline: "모집기간확인",
    status: "신청기간확인",
    description: "일하는 청년이 목돈을 마련할 수 있도록 정부지원금을 매칭해주는 자산형성 지원 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "기초연금",
    subtitle: "어르신 노후소득 지원",
    category: "노년·복지",
    age: ["60대", "70대"],
    region: ["전국"],
    target: "만 65세 이상 어르신 중 소득인정액 기준 충족자",
    amount: "소득 수준에 따라 차등 지급",
    deadline: "상시신청",
    status: "상시접수",
    description: "어르신의 안정적인 노후생활을 지원하기 위해 지급되는 대표적인 노년 복지 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "부모급여",
    subtitle: "영아 양육가정 지원",
    category: "출산·육아",
    age: ["20대", "30대", "40대"],
    region: ["전국"],
    target: "영아를 양육하는 가정",
    amount: "아동 연령에 따라 차등 지급",
    deadline: "상시신청",
    status: "상시접수",
    description: "영아기 양육 부담을 줄이기 위해 부모에게 지급되는 출산·육아 지원 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "아동수당",
    subtitle: "아동 양육비 부담 완화",
    category: "출산·육아",
    age: ["20대", "30대", "40대", "50대"],
    region: ["전국"],
    target: "아동을 양육하는 가정",
    amount: "월 단위 지급",
    deadline: "상시신청",
    status: "상시접수",
    description: "아동 양육에 따른 경제적 부담을 줄이고 아동의 기본 권리를 보장하기 위한 지원 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "에너지바우처",
    subtitle: "에너지 취약계층 비용 지원",
    category: "생활안정",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "에너지 취약계층 가구",
    amount: "가구원 수 및 조건별 차등 지원",
    deadline: "신청기간확인",
    status: "신청기간확인",
    description: "전기, 도시가스, 지역난방 등 에너지 이용 비용 부담을 줄이기 위한 바우처 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "긴급복지 생계지원",
    subtitle: "위기상황 가구 긴급 생활비 지원",
    category: "생활안정",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "갑작스러운 위기상황으로 생계유지가 어려운 가구",
    amount: "가구 상황별 차등 지원",
    deadline: "상시상담",
    status: "상시접수",
    description: "실직, 질병, 사고 등 갑작스러운 위기상황으로 생계가 어려운 가구를 신속히 지원하는 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "생계급여",
    subtitle: "기초생활보장 생계비 지원",
    category: "기초생활보장",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "소득인정액 기준을 충족하는 저소득 가구",
    amount: "가구 소득 및 기준에 따라 차등 지급",
    deadline: "상시신청",
    status: "상시접수",
    description: "생활이 어려운 가구의 최저생활을 보장하기 위해 지급되는 국민기초생활보장 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "주거급여",
    subtitle: "저소득 가구 주거비 지원",
    category: "주거지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "주거비 부담이 큰 저소득 가구",
    amount: "임차료 또는 주택수선비 지원",
    deadline: "상시신청",
    status: "상시접수",
    description: "저소득 가구의 임차료와 주택 개보수 비용 등을 지원하는 주거 복지 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "의료급여",
    subtitle: "저소득층 의료비 부담 완화",
    category: "의료지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "의료비 부담이 큰 저소득층",
    amount: "의료서비스 비용 지원",
    deadline: "상시신청",
    status: "상시접수",
    description: "생활이 어려운 국민의 의료비 부담을 낮추기 위해 의료서비스 비용을 지원하는 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "교육급여",
    subtitle: "저소득층 학생 교육비 지원",
    category: "교육지원",
    age: ["20대", "30대", "40대", "50대"],
    region: ["전국"],
    target: "초·중·고 학생이 있는 저소득 가구",
    amount: "교육활동지원비 등 지원",
    deadline: "신청기간확인",
    status: "신청기간확인",
    description: "저소득 가구 학생의 교육 기회를 보장하기 위해 교육활동비 등을 지원하는 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "한부모가족 지원",
    subtitle: "한부모가족 생활안정 및 양육 지원",
    category: "가족·양육",
    age: ["20대", "30대", "40대", "50대"],
    region: ["전국"],
    target: "한부모가족 및 조손가족 등 지원 대상 가구",
    amount: "아동양육비 등 차등 지원",
    deadline: "상시신청",
    status: "상시접수",
    description: "한부모가족의 생활 안정과 자녀 양육을 돕기 위한 복지 지원 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "문화누리카드",
    subtitle: "문화·여행·체육 활동비 지원",
    category: "문화·생활",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "기초생활수급자 및 차상위계층",
    amount: "연간 문화활동비 지원",
    deadline: "연도별 신청기간 확인",
    status: "신청기간확인",
    description: "문화예술, 국내여행, 체육활동을 지원하기 위한 문화복지 카드입니다.",
    source: "문화누리",
    link: "https://www.mnuri.kr/"
  },
  {
    title: "평생교육바우처",
    subtitle: "성인 학습자 교육비 지원",
    category: "교육지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "학습 기회가 필요한 성인 학습자",
    amount: "교육비 바우처 지원",
    deadline: "모집기간확인",
    status: "신청기간확인",
    description: "성인 학습자가 원하는 평생교육 강좌를 수강할 수 있도록 교육비를 지원하는 제도입니다.",
    source: "평생교육바우처",
    link: "https://www.lllcard.kr/"
  },
  {
    title: "국가장학금",
    subtitle: "대학생 등록금 부담 완화",
    category: "교육지원",
    age: ["20대", "30대"],
    region: ["전국"],
    target: "소득구간 기준을 충족하는 대학생",
    amount: "소득구간별 차등 지원",
    deadline: "학기별 신청",
    status: "신청기간확인",
    description: "대학생의 등록금 부담을 낮추기 위해 지원되는 대표적인 장학금 제도입니다.",
    source: "한국장학재단",
    link: "https://www.kosaf.go.kr/"
  },
  {
    title: "소상공인 정책자금",
    subtitle: "소상공인 경영 안정 자금 지원",
    category: "소상공인",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "소상공인 및 자영업자",
    amount: "자금 종류별 상이",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "소상공인의 창업, 경영안정, 성장지원을 위한 정책자금 안내 서비스입니다.",
    source: "소상공인시장진흥공단",
    link: "https://ols.semas.or.kr/"
  },
  {
    title: "희망리턴패키지",
    subtitle: "폐업·재기 소상공인 지원",
    category: "소상공인",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "폐업 예정 또는 재기를 준비하는 소상공인",
    amount: "사업별 차등 지원",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "소상공인의 폐업 부담 완화와 재취업·재창업을 지원하는 재기 지원 사업입니다.",
    source: "소상공인시장진흥공단",
    link: "https://www.sbiz.or.kr/"
  },
  {
    title: "근로자 생활안정자금",
    subtitle: "근로자 생활비 융자 지원",
    category: "근로자지원",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "생활비 부담이 있는 근로자",
    amount: "용도별 융자 지원",
    deadline: "상시 또는 예산 소진 시",
    status: "상시접수",
    description: "근로자의 의료비, 혼례비, 장례비 등 생활 안정에 필요한 자금을 지원하는 제도입니다.",
    source: "근로복지공단",
    link: "https://www.comwel.or.kr/"
  },
  {
    title: "직업훈련 생계비 대부",
    subtitle: "훈련 참여자 생계비 대부 지원",
    category: "교육·훈련",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "직업훈련에 참여하는 실업자 또는 비정규직 근로자 등",
    amount: "대부 한도 내 지원",
    deadline: "상시 또는 예산 소진 시",
    status: "상시접수",
    description: "직업훈련에 참여하는 동안 생계 부담을 줄일 수 있도록 대부를 지원하는 제도입니다.",
    source: "근로복지공단",
    link: "https://www.comwel.or.kr/"
  },
  {
    title: "건강보험 환급금 조회",
    subtitle: "건강보험료 및 본인부담금 환급 확인",
    category: "환급금",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "건강보험 환급 가능 여부를 확인하려는 국민",
    amount: "개인별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "건강보험료 과오납 또는 본인부담상한제 등에 따른 환급 가능 여부를 확인할 수 있습니다.",
    source: "국민건강보험공단",
    link: "https://www.nhis.or.kr/"
  },
  {
    title: "국민연금 환급금 조회",
    subtitle: "국민연금 과오납 환급 확인",
    category: "환급금",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "국민연금 환급 가능 여부를 확인하려는 국민",
    amount: "개인별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "국민연금 보험료 과오납 등으로 발생한 환급 가능 여부를 확인할 수 있습니다.",
    source: "국민연금공단",
    link: "https://www.nps.or.kr/"
  },
  {
    title: "통신비 미환급금 조회",
    subtitle: "통신요금 미환급액 확인",
    category: "환급금",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "통신요금 환급 가능 여부를 확인하려는 이용자",
    amount: "개인별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "통신 서비스 해지나 요금 정산 과정에서 발생한 미환급금을 확인할 수 있습니다.",
    source: "스마트초이스",
    link: "https://www.smartchoice.or.kr/"
  },
  {
    title: "휴면예금 찾기",
    subtitle: "잠들어 있는 예금 조회",
    category: "숨은돈찾기",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "휴면예금 보유 여부를 확인하려는 국민",
    amount: "개인별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "오랫동안 거래가 없어 휴면 처리된 예금 또는 보험금 등을 확인할 수 있는 서비스입니다.",
    source: "서민금융진흥원",
    link: "https://sleepmoney.kinfa.or.kr/"
  },
  {
    title: "카드포인트 통합조회",
    subtitle: "흩어진 카드포인트 조회 및 현금화",
    category: "숨은돈찾기",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "여러 카드사의 포인트를 확인하려는 이용자",
    amount: "개인별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "여러 카드사에 흩어진 카드포인트를 한 번에 확인하고 계좌입금 가능 여부를 확인할 수 있습니다.",
    source: "여신금융협회",
    link: "https://www.cardpoint.or.kr/"
  },
  {
    title: "재난적 의료비 지원",
    subtitle: "과도한 의료비 부담 완화",
    category: "의료지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "의료비 부담이 큰 가구",
    amount: "질환 및 부담 수준에 따라 차등 지원",
    deadline: "신청기간확인",
    status: "신청기간확인",
    description: "갑작스러운 질병이나 사고로 의료비 부담이 큰 가구를 지원하는 의료비 지원 제도입니다.",
    source: "국민건강보험공단",
    link: "https://www.nhis.or.kr/"
  },
  {
    title: "노인일자리 및 사회활동 지원",
    subtitle: "어르신 일자리 참여 지원",
    category: "노년·일자리",
    age: ["60대", "70대"],
    region: ["전국"],
    target: "일자리와 사회활동 참여를 원하는 어르신",
    amount: "사업 유형별 활동비 지급",
    deadline: "모집기간확인",
    status: "신청기간확인",
    description: "어르신의 소득 보충과 사회참여를 돕기 위해 운영되는 노인 일자리 지원 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "장애인연금",
    subtitle: "중증장애인 생활안정 지원",
    category: "장애인지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "중증장애인 중 소득·재산 기준 충족자",
    amount: "기초급여 및 부가급여 차등 지급",
    deadline: "상시신청",
    status: "상시접수",
    description: "중증장애인의 생활 안정과 복지 향상을 위해 지급되는 장애인 소득보장 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  }
,
  {
    title: "서울 청년수당",
    subtitle: "서울 미취업 청년 활동지원",
    category: "청년지원",
    age: ["20대", "30대"],
    region: ["서울특별시"],
    target: "서울 거주 미취업 또는 단기근로 청년",
    amount: "월 50만 원, 최대 6개월",
    deadline: "모집기간확인",
    status: "신청기간확인",
    description: "서울 거주 청년의 구직활동, 진로탐색, 생활 안정을 돕기 위한 서울시 청년 지원 제도입니다.",
    source: "서울청년몽땅정보통",
    link: "https://youth.seoul.go.kr/"
  },
  {
    title: "서울 청년월세지원",
    subtitle: "서울 청년 주거비 부담 완화",
    category: "청년·주거",
    age: ["20대", "30대"],
    region: ["서울특별시"],
    target: "서울 거주 무주택 청년 1인 가구",
    amount: "월세 일부 지원",
    deadline: "모집기간확인",
    status: "신청기간확인",
    description: "서울 청년의 월세 부담을 줄이기 위해 주거비 일부를 지원하는 서울시 청년 주거 지원사업입니다.",
    source: "서울주거포털",
    link: "https://housing.seoul.go.kr/"
  },
  {
    title: "서울 청년정책 통합검색",
    subtitle: "서울 청년 맞춤 정책 확인",
    category: "청년지원",
    age: ["20대", "30대"],
    region: ["서울특별시"],
    target: "서울 거주 또는 서울 생활권 청년",
    amount: "정책별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "서울시에서 운영하는 청년 일자리, 주거, 복지, 교육 관련 정책을 한 곳에서 확인할 수 있습니다.",
    source: "서울청년몽땅정보통",
    link: "https://youth.seoul.go.kr/"
  },
  {
    title: "경기도 청년기본소득",
    subtitle: "경기도 청년 사회적 기본권 지원",
    category: "청년지원",
    age: ["20대"],
    region: ["경기도"],
    target: "경기도 거주 청년 중 연령 및 거주 요건 충족자",
    amount: "분기별 지역화폐 지급",
    deadline: "분기별신청",
    status: "신청기간확인",
    description: "경기도 청년의 사회적 기본권 보장을 위해 분기별로 지급되는 경기도 청년 지원 제도입니다.",
    source: "경기도청",
    link: "https://www.gg.go.kr/contents/contents.do?ciIdx=1037&menuId=2736"
  },
  {
    title: "경기도 청년면접수당",
    subtitle: "청년 구직활동 면접비 지원",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["경기도"],
    target: "면접에 참여한 경기도 청년 구직자",
    amount: "면접 1회당 수당 지원",
    deadline: "모집기간확인",
    status: "신청기간확인",
    description: "경기도 청년의 구직활동 부담을 줄이기 위해 면접 비용을 지원하는 청년 취업 지원사업입니다.",
    source: "경기도일자리재단",
    link: "https://www.jobaba.net/"
  },
  {
    title: "경기도 청년 노동자 통장",
    subtitle: "경기 청년 자산형성 지원",
    category: "청년·자산형성",
    age: ["20대", "30대"],
    region: ["경기도"],
    target: "경기도 거주 청년 노동자 중 소득 기준 충족자",
    amount: "저축액에 지원금 매칭",
    deadline: "모집기간확인",
    status: "신청기간확인",
    description: "일하는 경기도 청년의 자산 형성을 돕기 위해 일정 기간 저축 시 지원금을 더해주는 제도입니다.",
    source: "경기도청",
    link: "https://www.gg.go.kr/"
  },
  {
    title: "부산 청년월세지원",
    subtitle: "부산 청년 주거비 지원",
    category: "청년·주거",
    age: ["20대", "30대"],
    region: ["부산광역시"],
    target: "부산 거주 무주택 청년",
    amount: "월세 일부 지원",
    deadline: "부산시공고확인",
    status: "공고확인",
    description: "부산 청년의 주거비 부담을 줄이기 위해 월세 일부를 지원하는 지역 청년 주거 정책입니다.",
    source: "부산광역시",
    link: "https://www.busan.go.kr/"
  },
  {
    title: "부산 청년 디딤돌카드",
    subtitle: "부산 청년 구직활동 지원",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["부산광역시"],
    target: "부산 거주 미취업 청년",
    amount: "구직활동비 지원",
    deadline: "부산시공고확인",
    status: "공고확인",
    description: "부산 지역 미취업 청년의 구직활동과 취업 준비를 돕기 위한 청년 지원사업입니다.",
    source: "부산광역시",
    link: "https://www.busan.go.kr/"
  },
  {
    title: "대구 청년사회진입활동지원금",
    subtitle: "대구 청년 구직·사회진입 지원",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["대구광역시"],
    target: "대구 거주 미취업 청년",
    amount: "활동지원금 지급",
    deadline: "대구시공고확인",
    status: "공고확인",
    description: "대구 청년의 사회진입과 구직활동을 지원하기 위한 대구광역시 청년 지원 제도입니다.",
    source: "대구광역시",
    link: "https://www.daegu.go.kr/"
  },
  {
    title: "인천 드림체크카드",
    subtitle: "인천 미취업 청년 구직활동 지원",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["인천광역시"],
    target: "인천 거주 미취업 청년",
    amount: "구직활동비 지원",
    deadline: "인천시공고확인",
    status: "공고확인",
    description: "인천 청년의 취업 준비와 구직활동 부담을 줄이기 위한 청년 구직 지원사업입니다.",
    source: "인천광역시",
    link: "https://www.incheon.go.kr/"
  },
  {
    title: "인천 청년 자격증 응시료 지원",
    subtitle: "취업 준비 자격시험 비용 지원",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["인천광역시"],
    target: "인천 거주 청년 구직자",
    amount: "자격증 응시료 일부 지원",
    deadline: "인천시공고확인",
    status: "공고확인",
    description: "청년의 취업역량 강화를 위해 자격증 시험 응시료 부담을 줄여주는 인천시 청년 지원사업입니다.",
    source: "인천광역시",
    link: "https://www.incheon.go.kr/"
  },
  {
    title: "광주 청년드림수당",
    subtitle: "광주 청년 구직활동 지원",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["광주광역시"],
    target: "광주 거주 미취업 청년",
    amount: "구직활동비 지원",
    deadline: "광주시공고확인",
    status: "공고확인",
    description: "광주 청년의 취업 준비와 자립을 돕기 위한 구직활동 지원 제도입니다.",
    source: "광주광역시",
    link: "https://www.gwangju.go.kr/"
  },
  {
    title: "대전 청년내일희망카드",
    subtitle: "대전 청년 구직활동 지원",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["대전광역시"],
    target: "대전 거주 미취업 청년",
    amount: "구직활동비 지원",
    deadline: "대전시공고확인",
    status: "공고확인",
    description: "대전 청년의 취업 준비를 돕고 구직활동에 필요한 비용 부담을 줄이기 위한 지원사업입니다.",
    source: "대전광역시",
    link: "https://www.daejeon.go.kr/"
  },
  {
    title: "울산 청년가구 주거비 지원",
    subtitle: "울산 청년 주거 안정 지원",
    category: "청년·주거",
    age: ["20대", "30대"],
    region: ["울산광역시"],
    target: "울산 거주 청년 가구",
    amount: "주거비 일부 지원",
    deadline: "울산시공고확인",
    status: "공고확인",
    description: "울산 청년가구의 주거비 부담을 줄이고 안정적인 지역 정착을 돕기 위한 지원사업입니다.",
    source: "울산광역시",
    link: "https://www.ulsan.go.kr/"
  },
  {
    title: "세종 청년정책 안내",
    subtitle: "세종 청년 지원정책 통합 확인",
    category: "청년지원",
    age: ["20대", "30대"],
    region: ["세종시"],
    target: "세종 거주 청년",
    amount: "정책별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "세종시에서 운영하는 청년 일자리, 주거, 복지, 문화 관련 지원정책을 확인할 수 있습니다.",
    source: "세종특별자치시",
    link: "https://www.sejong.go.kr/"
  },
  {
    title: "강원 청년구직활동 지원",
    subtitle: "강원 청년 취업 준비 지원",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["강원도"],
    target: "강원 지역 미취업 청년",
    amount: "구직활동비 지원",
    deadline: "강원도공고확인",
    status: "공고확인",
    description: "강원 지역 청년의 구직활동과 취업 준비를 지원하기 위한 지역 청년 지원사업입니다.",
    source: "강원특별자치도",
    link: "https://state.gwd.go.kr/"
  },
  {
    title: "충북 청년지원정책",
    subtitle: "충북 청년 정책 통합 안내",
    category: "청년지원",
    age: ["20대", "30대"],
    region: ["충청북도"],
    target: "충북 거주 청년",
    amount: "정책별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "충청북도에서 운영하는 청년 취업, 주거, 복지, 창업 관련 지원정책을 확인할 수 있습니다.",
    source: "충청북도",
    link: "https://www.chungbuk.go.kr/"
  },
  {
    title: "충남 청년정책 안내",
    subtitle: "충남 청년 지원사업 확인",
    category: "청년지원",
    age: ["20대", "30대"],
    region: ["충청남도"],
    target: "충남 거주 청년",
    amount: "정책별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "충청남도 청년을 대상으로 한 취업, 주거, 복지, 창업 지원정책을 확인할 수 있습니다.",
    source: "충청남도",
    link: "https://www.chungnam.go.kr/"
  },
  {
    title: "전북 청년활력수당",
    subtitle: "전북 청년 구직활동 지원",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["전라북도"],
    target: "전북 거주 미취업 청년",
    amount: "구직활동비 지원",
    deadline: "전북공고확인",
    status: "공고확인",
    description: "전북 청년의 구직활동과 사회진입을 지원하기 위한 지역 청년 지원사업입니다.",
    source: "전북특별자치도",
    link: "https://www.jeonbuk.go.kr/"
  },
  {
    title: "전남 청년문화복지카드",
    subtitle: "전남 청년 문화·복지 활동 지원",
    category: "청년·복지",
    age: ["20대", "30대"],
    region: ["전라남도"],
    target: "전남 거주 청년",
    amount: "문화복지비 지원",
    deadline: "전남공고확인",
    status: "공고확인",
    description: "전남 청년의 문화생활과 자기계발을 지원하기 위한 청년 문화복지 지원사업입니다.",
    source: "전라남도",
    link: "https://www.jeonnam.go.kr/"
  },
  {
    title: "경북 청년근로자 지원사업",
    subtitle: "경북 청년 근로자 자산·복지 지원",
    category: "청년·근로",
    age: ["20대", "30대"],
    region: ["경상북도"],
    target: "경북 지역 청년 근로자",
    amount: "사업별 차등 지원",
    deadline: "경북공고확인",
    status: "공고확인",
    description: "경북 지역 청년 근로자의 장기근속과 자산 형성을 돕는 청년 근로자 지원사업입니다.",
    source: "경상북도",
    link: "https://www.gb.go.kr/"
  },
  {
    title: "경남 청년구직활동수당",
    subtitle: "경남 청년 취업 준비 지원",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["경상남도"],
    target: "경남 거주 미취업 청년",
    amount: "구직활동수당 지원",
    deadline: "경남공고확인",
    status: "공고확인",
    description: "경남 청년의 취업 준비와 구직활동 비용 부담을 줄이기 위한 청년 지원사업입니다.",
    source: "경상남도",
    link: "https://www.gyeongnam.go.kr/"
  },
  {
    title: "제주 청년정책 안내",
    subtitle: "제주 청년 지원정책 통합 확인",
    category: "청년지원",
    age: ["20대", "30대"],
    region: ["제주도"],
    target: "제주 거주 청년",
    amount: "정책별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "제주 청년을 대상으로 한 취업, 주거, 복지, 생활 안정 지원정책을 확인할 수 있습니다.",
    source: "제주특별자치도",
    link: "https://www.jeju.go.kr/"
  },
  {
    title: "청년 주거급여 분리지급",
    subtitle: "부모와 따로 사는 청년 주거비 지원",
    category: "청년·주거",
    age: ["20대"],
    region: ["전국"],
    target: "주거급여 수급가구 내 부모와 따로 거주하는 청년",
    amount: "지역·가구 기준에 따라 주거급여 분리 지급",
    deadline: "상시신청",
    status: "상시접수",
    description: "주거급여 수급가구의 청년이 학업·취업 등으로 부모와 따로 거주하는 경우 주거급여를 분리 지급받을 수 있습니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00003201"
  },
  {
    title: "청년도전지원사업",
    subtitle: "구직단념 청년 취업역량 강화",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["전국"],
    target: "구직단념 청년 및 취업 준비 청년",
    amount: "참여수당 및 인센티브 지원",
    deadline: "상시 또는 운영기관별 모집",
    status: "상시접수",
    description: "구직 의욕이 낮아진 청년에게 맞춤형 프로그램과 참여수당을 제공해 취업역량을 높이는 지원사업입니다.",
    source: "고용24",
    link: "https://www.work24.go.kr/wk/g/b/1100/busiIntro.do"
  },
  {
    title: "청년성장프로젝트",
    subtitle: "청년 구직활동 및 직장 적응 지원",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["전국"],
    target: "미취업 청년 및 입직 초기 청년",
    amount: "프로그램별 상이",
    deadline: "운영기관별 모집",
    status: "신청기간확인",
    description: "청년의 구직단념 예방과 직장 적응을 돕기 위해 고용노동부와 지자체가 함께 운영하는 지원사업입니다.",
    source: "고용24",
    link: "https://www.work24.go.kr/wk/v/a/1000/youngGrowIntro.do"
  },
  {
    title: "미래내일 일경험",
    subtitle: "청년 직무경험 프로그램",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["전국"],
    target: "직무 경험이 필요한 청년",
    amount: "프로그램별 참여 지원",
    deadline: "모집기간확인",
    status: "신청기간확인",
    description: "청년이 실제 직무를 경험하며 진로를 탐색하고 취업역량을 높일 수 있도록 지원하는 일경험 프로그램입니다.",
    source: "고용24",
    link: "https://www.work24.go.kr/"
  },
  {
    title: "대학일자리플러스센터",
    subtitle: "대학생·청년 취업지원 서비스",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["전국"],
    target: "대학생, 졸업생, 지역 청년",
    amount: "취업상담 및 프로그램 지원",
    deadline: "상시상담",
    status: "상시접수",
    description: "대학생과 지역 청년에게 진로상담, 취업컨설팅, 채용연계 프로그램 등을 제공하는 취업지원 서비스입니다.",
    source: "고용24",
    link: "https://www.work24.go.kr/"
  },
  {
    title: "청년일자리도약장려금",
    subtitle: "청년 신규채용 및 근속 지원",
    category: "청년·취업",
    age: ["20대", "30대"],
    region: ["전국"],
    target: "청년을 신규 채용한 기업 및 근로 청년",
    amount: "사업 유형별 장려금 지원",
    deadline: "사업공고확인",
    status: "공고확인",
    description: "청년 신규 일자리 창출과 장기근속을 유도하기 위해 기업과 청년을 지원하는 고용지원 제도입니다.",
    source: "고용24",
    link: "https://m.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=10&systClId=SC00000117&systId=SI00000318"
  },
  {
    title: "온통청년 청년정책 검색",
    subtitle: "전국 청년정책 통합 확인",
    category: "청년정책",
    age: ["20대", "30대"],
    region: ["전국"],
    target: "청년정책을 찾는 모든 청년",
    amount: "정책별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "전국 청년정책, 청년공간, 상담서비스, 청년소식을 통합적으로 확인할 수 있는 청년정책 플랫폼입니다.",
    source: "온통청년",
    link: "https://www.youthcenter.go.kr/"
  }
,
  {
    title: "중장년내일센터",
    subtitle: "중장년 생애경력설계 및 재취업 지원",
    category: "중장년·취업",
    age: ["40대", "50대", "60대"],
    region: ["전국"],
    target: "40대 이상 재직자, 퇴직예정자, 구직자 및 사업주",
    amount: "상담·교육·취업지원 서비스 제공",
    deadline: "상시상담",
    status: "상시접수",
    description: "중장년층의 경력 전환, 재취업, 생애경력설계를 돕기 위한 고용지원 서비스입니다.",
    source: "고용24",
    link: "https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systClId=SC00000268&systId=SI00000428"
  },
  {
    title: "신중년 경력형 일자리",
    subtitle: "신중년 전문경력 활용 일자리 지원",
    category: "중장년·일자리",
    age: ["50대", "60대"],
    region: ["전국"],
    target: "50세 이상 65세 미만 퇴직 전문인력",
    amount: "참여 일자리별 임금 지급",
    deadline: "지자체공고확인",
    status: "공고확인",
    description: "신중년의 경력과 전문성을 활용해 지역사회 서비스형 일자리에 참여할 수 있도록 지원하는 사업입니다.",
    source: "고용24",
    link: "https://m.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000429"
  },
  {
    title: "고령자 계속고용장려금",
    subtitle: "정년 이후 계속고용 사업주 지원",
    category: "고용장려금",
    age: ["50대", "60대"],
    region: ["전국"],
    target: "고령 근로자를 계속 고용하는 사업주",
    amount: "근로자 계속고용에 따른 장려금 지원",
    deadline: "사업공고확인",
    status: "공고확인",
    description: "정년 이후에도 고령 근로자를 계속 고용하는 사업주에게 장려금을 지원하는 고용지원 제도입니다.",
    source: "고용24",
    link: "https://www.work24.go.kr/"
  },
  {
    title: "고령자 고용지원금",
    subtitle: "고령 근로자 고용 확대 지원",
    category: "고용장려금",
    age: ["50대", "60대"],
    region: ["전국"],
    target: "고령 근로자 고용을 확대하는 사업주",
    amount: "고용 증가 인원 기준 지원",
    deadline: "사업공고확인",
    status: "공고확인",
    description: "고령 근로자의 고용 안정을 높이고 사업주의 고령자 채용 부담을 줄이기 위한 지원금입니다.",
    source: "고용24",
    link: "https://www.work24.go.kr/"
  },
  {
    title: "소상공인 정책자금",
    subtitle: "소상공인 경영안정 및 성장자금 지원",
    category: "소상공인",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "소상공인 및 자영업자",
    amount: "자금 종류별 융자 지원",
    deadline: "자금별공고확인",
    status: "공고확인",
    description: "소상공인의 창업, 경영안정, 성장 기반 마련을 위해 정책자금을 지원하는 제도입니다.",
    source: "소상공인시장진흥공단",
    link: "https://ols.semas.or.kr/"
  },
  {
    title: "희망리턴패키지",
    subtitle: "폐업·재기 소상공인 지원",
    category: "소상공인·재기지원",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "폐업 예정 또는 폐업 후 재기를 준비하는 소상공인",
    amount: "재기지원·취업지원·사업화지원 등 사업별 상이",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "폐업 부담 완화와 재취업·재창업을 돕기 위한 소상공인 재기지원 사업입니다.",
    source: "소상공인시장진흥공단",
    link: "https://www.sbiz.or.kr/nhrp/main.do"
  },
  {
    title: "희망리턴패키지 원스톱 폐업지원",
    subtitle: "소상공인 폐업 부담 완화",
    category: "소상공인·폐업지원",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "폐업 예정 또는 폐업 소상공인",
    amount: "점포철거, 법률·세무 상담 등 사업별 지원",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "폐업 과정에서 필요한 상담, 철거, 정리 지원 등을 통해 소상공인의 부담을 줄이는 지원사업입니다.",
    source: "소상공인시장진흥공단",
    link: "https://www.sbiz.or.kr/nhrp/intro/bizIntroduce.do"
  },
  {
    title: "자영업자 고용보험료 지원",
    subtitle: "소상공인 고용보험료 부담 완화",
    category: "소상공인·보험지원",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "자영업자 고용보험에 가입한 소상공인",
    amount: "고용보험료 일부 지원",
    deadline: "예산소진시까지",
    status: "공고확인",
    description: "자영업자의 고용보험 가입 부담을 낮추고 폐업 이후 재기 안전망을 마련하기 위한 지원 제도입니다.",
    source: "소상공인시장진흥공단",
    link: "https://www.sbiz.or.kr/"
  },
  {
    title: "소상공인 컨설팅 지원",
    subtitle: "경영개선 및 점포 운영 컨설팅",
    category: "소상공인·경영지원",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "경영 개선이 필요한 소상공인",
    amount: "컨설팅 비용 지원",
    deadline: "사업공고확인",
    status: "공고확인",
    description: "소상공인의 경영진단, 마케팅, 매장 운영, 재무관리 등을 개선할 수 있도록 전문가 컨설팅을 지원합니다.",
    source: "소상공인시장진흥공단",
    link: "https://www.sbiz.or.kr/"
  },
  {
    title: "전통시장 및 상점가 지원사업",
    subtitle: "전통시장 활성화 지원",
    category: "소상공인·시장지원",
    age: ["30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "전통시장, 상점가, 시장 상인 및 상인회",
    amount: "사업별 차등 지원",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "전통시장과 상점가의 경쟁력 강화, 시설 개선, 마케팅 활성화를 위한 지원사업입니다.",
    source: "소상공인시장진흥공단",
    link: "https://www.semas.or.kr/"
  },
  {
    title: "노란우산공제",
    subtitle: "소기업·소상공인 생활안정 공제",
    category: "소상공인·공제",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "소기업·소상공인 대표자",
    amount: "공제금·소득공제 혜택",
    deadline: "상시가입",
    status: "상시접수",
    description: "폐업, 노령 등 경영위기 상황에 대비할 수 있도록 소기업·소상공인 대표자가 가입하는 공제 제도입니다.",
    source: "중소기업중앙회",
    link: "https://www.8899.or.kr/"
  },
  {
    title: "근로자 생활안정자금 융자",
    subtitle: "근로자 생활비 부담 완화",
    category: "근로자지원",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "생활비 부담이 있는 근로자",
    amount: "의료비·혼례비·장례비 등 용도별 융자",
    deadline: "상시 또는 예산소진시",
    status: "상시접수",
    description: "근로자의 생활 안정에 필요한 자금을 낮은 부담으로 이용할 수 있도록 지원하는 융자 제도입니다.",
    source: "근로복지공단",
    link: "https://www.comwel.or.kr/"
  },
  {
    title: "직업훈련 생계비 대부",
    subtitle: "직업훈련 참여자 생계비 지원",
    category: "근로자·훈련지원",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "직업훈련에 참여하는 실업자, 비정규직 근로자 등",
    amount: "월 단위 대부 지원",
    deadline: "상시 또는 예산소진시",
    status: "상시접수",
    description: "직업훈련 참여 기간 동안 생계비 부담을 줄일 수 있도록 대부를 지원하는 제도입니다.",
    source: "고용24",
    link: "https://m.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systClId=SC00000058&systCnntId=&systId=SI00000366"
  },
  {
    title: "임금체불 생계비 융자",
    subtitle: "임금체불 근로자 생계지원",
    category: "근로자지원",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "임금체불로 생활이 어려운 근로자",
    amount: "생계비 융자 지원",
    deadline: "상시상담",
    status: "상시접수",
    description: "임금체불로 경제적 어려움을 겪는 근로자의 생활 안정을 돕기 위한 지원 제도입니다.",
    source: "근로복지공단",
    link: "https://www.comwel.or.kr/"
  },
  {
    title: "체불근로자 대지급금 제도",
    subtitle: "체불임금 일부 지급 지원",
    category: "근로자지원",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "임금·퇴직금을 지급받지 못한 근로자",
    amount: "체불임금 일부 지급",
    deadline: "요건별 신청",
    status: "신청기간확인",
    description: "사업주로부터 임금 등을 지급받지 못한 근로자에게 일정 요건에 따라 대지급금을 지급하는 제도입니다.",
    source: "근로복지공단",
    link: "https://www.comwel.or.kr/"
  },
  {
    title: "산재근로자 생활안정자금",
    subtitle: "산재근로자 생활 안정 지원",
    category: "근로자·산재지원",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "산업재해로 어려움을 겪는 산재근로자",
    amount: "생활안정자금 융자 지원",
    deadline: "상시상담",
    status: "상시접수",
    description: "산재근로자와 가족의 생활 안정을 위해 필요한 자금을 지원하는 근로복지공단 제도입니다.",
    source: "근로복지공단",
    link: "https://www.comwel.or.kr/"
  },
  {
    title: "산재근로자 직업복귀 지원",
    subtitle: "산재 이후 직업 복귀 지원",
    category: "근로자·산재지원",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "치료 후 직업복귀가 필요한 산재근로자",
    amount: "직업훈련·복귀지원 등",
    deadline: "상시상담",
    status: "상시접수",
    description: "산재근로자가 치료 이후 다시 일할 수 있도록 직업훈련과 직장복귀를 지원하는 제도입니다.",
    source: "근로복지공단",
    link: "https://www.comwel.or.kr/"
  },
  {
    title: "고용유지지원금",
    subtitle: "사업주의 고용유지 부담 완화",
    category: "고용장려금",
    age: ["30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "경영 악화에도 근로자를 계속 고용하는 사업주",
    amount: "휴업·휴직수당 일부 지원",
    deadline: "사업공고확인",
    status: "공고확인",
    description: "경영난으로 고용조정이 불가피한 사업주가 근로자를 계속 고용할 수 있도록 지원하는 제도입니다.",
    source: "고용24",
    link: "https://www.work24.go.kr/"
  },
  {
    title: "출산육아기 고용안정장려금",
    subtitle: "육아휴직 등 고용안정 지원",
    category: "고용장려금",
    age: ["20대", "30대", "40대", "50대"],
    region: ["전국"],
    target: "육아휴직·근로시간 단축 등을 허용한 사업주",
    amount: "사업주 장려금 지원",
    deadline: "요건별 신청",
    status: "신청기간확인",
    description: "근로자의 출산·육아기 고용 안정을 위해 사업주에게 장려금을 지원하는 제도입니다.",
    source: "고용24",
    link: "https://www.work24.go.kr/"
  },
  {
    title: "워라밸일자리 장려금",
    subtitle: "근로시간 단축 활용 사업주 지원",
    category: "고용장려금",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "근로시간 단축 제도를 활용하는 사업주",
    amount: "근로시간 단축에 따른 장려금 지원",
    deadline: "사업공고확인",
    status: "공고확인",
    description: "근로자의 일·생활 균형을 위해 근로시간 단축 제도를 운영하는 사업주를 지원하는 제도입니다.",
    source: "고용24",
    link: "https://www.work24.go.kr/"
  },
  {
    title: "고용촉진장려금",
    subtitle: "취업취약계층 채용 지원",
    category: "고용장려금",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "취업취약계층을 채용한 사업주",
    amount: "채용 인원 기준 장려금 지원",
    deadline: "사업공고확인",
    status: "공고확인",
    description: "취업이 어려운 사람을 채용한 사업주에게 장려금을 지원해 취업기회를 확대하는 제도입니다.",
    source: "고용24",
    link: "https://www.work24.go.kr/"
  },
  {
    title: "여성새로일하기센터",
    subtitle: "경력단절여성 취업지원",
    category: "여성·취업",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "취업을 희망하는 여성 및 경력단절여성",
    amount: "상담·훈련·취업연계 지원",
    deadline: "상시상담",
    status: "상시접수",
    description: "경력단절여성과 취업 희망 여성을 대상으로 상담, 직업교육, 취업연계를 제공하는 지원 서비스입니다.",
    source: "여성가족부",
    link: "https://saeil.mogef.go.kr/"
  },
  {
    title: "새일여성인턴",
    subtitle: "여성 취업연계 인턴 지원",
    category: "여성·취업",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "취업을 희망하는 여성 및 채용 기업",
    amount: "인턴 연계 및 지원금 제공",
    deadline: "센터별 모집",
    status: "공고확인",
    description: "경력단절여성 등이 기업 현장에 적응하고 취업으로 이어질 수 있도록 인턴십을 지원하는 사업입니다.",
    source: "여성새로일하기센터",
    link: "https://saeil.mogef.go.kr/"
  },
  {
    title: "귀농귀촌 지원사업",
    subtitle: "귀농·귀촌 준비 및 정착 지원",
    category: "농어촌·정착지원",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "귀농·귀촌을 준비하거나 농촌 정착을 희망하는 국민",
    amount: "교육·상담·정착 지원 등",
    deadline: "지역별공고확인",
    status: "공고확인",
    description: "귀농귀촌 희망자의 안정적인 농촌 정착을 돕기 위해 교육, 상담, 정책 정보를 제공하는 지원 서비스입니다.",
    source: "귀농귀촌종합센터",
    link: "https://www.returnfarm.com/"
  },
  {
    title: "청년농업인 영농정착지원",
    subtitle: "청년 농업인 초기 정착 지원",
    category: "농업·창업지원",
    age: ["20대", "30대", "40대"],
    region: ["전국"],
    target: "영농 창업을 준비하거나 초기 정착 중인 청년농업인",
    amount: "영농정착지원금 등",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "청년농업인의 안정적인 영농 정착과 농업 창업을 돕기 위한 지원사업입니다.",
    source: "농림축산식품부",
    link: "https://www.mafra.go.kr/"
  },
  {
    title: "공익직불금",
    subtitle: "농업·농촌 공익기능 증진 지원",
    category: "농업지원",
    age: ["30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "요건을 충족하는 농업인 및 농업법인",
    amount: "직불금 유형별 지급",
    deadline: "신청기간확인",
    status: "신청기간확인",
    description: "농업·농촌의 공익기능 증진과 농업인의 소득 안정을 위해 지급되는 농업 지원 제도입니다.",
    source: "농림축산식품부",
    link: "https://www.mafra.go.kr/"
  },
  {
    title: "농업경영회생자금",
    subtitle: "경영위기 농업인 회생 지원",
    category: "농업·자금지원",
    age: ["30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "경영 위기를 겪는 농업인",
    amount: "농업 경영회생 자금 지원",
    deadline: "기관상담확인",
    status: "신청기간확인",
    description: "재해, 가격 하락, 경영 악화 등으로 어려움을 겪는 농업인의 경영 회생을 돕는 자금 지원 제도입니다.",
    source: "농림축산식품부",
    link: "https://www.mafra.go.kr/"
  },
  {
    title: "중소기업 재직자 우대 저축공제",
    subtitle: "중소기업 재직자 자산형성 지원",
    category: "근로자·자산형성",
    age: ["20대", "30대", "40대", "50대"],
    region: ["전국"],
    target: "중소기업에 재직 중인 근로자",
    amount: "기업지원금 및 우대금리 등",
    deadline: "상품운영확인",
    status: "신청기간확인",
    description: "중소기업 재직자의 장기근속과 자산 형성을 돕기 위한 저축공제 성격의 지원 제도입니다.",
    source: "중소벤처기업부",
    link: "https://www.mss.go.kr/"
  },
  {
    title: "창업기업지원서비스 바우처",
    subtitle: "초기 창업기업 서비스 비용 지원",
    category: "창업지원",
    age: ["20대", "30대", "40대", "50대"],
    region: ["전국"],
    target: "초기 창업기업 및 예비 창업자",
    amount: "서비스 바우처 지원",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "초기 창업기업이 세무, 회계, 기술보호 등 필요한 서비스를 이용할 수 있도록 바우처를 지원하는 사업입니다.",
    source: "K-Startup",
    link: "https://www.k-startup.go.kr/"
  },
  {
    title: "창업성공패키지",
    subtitle: "창업기업 성장 패키지 지원",
    category: "창업지원",
    age: ["20대", "30대", "40대", "50대"],
    region: ["전국"],
    target: "예비창업자 또는 창업기업",
    amount: "사업화 자금 및 프로그램 지원",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "창업자의 사업화, 성장, 투자유치, 교육·멘토링 등을 패키지로 지원하는 창업지원 사업입니다.",
    source: "K-Startup",
    link: "https://www.k-startup.go.kr/"
  },
  {
    title: "재창업 지원사업",
    subtitle: "실패 경험 창업자의 재도전 지원",
    category: "창업·재도전지원",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "재창업을 준비하는 예비창업자 또는 재창업 기업",
    amount: "사업화 자금 및 멘토링 지원",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "실패 경험이 있는 창업자가 다시 사업에 도전할 수 있도록 사업화와 재기 프로그램을 지원하는 사업입니다.",
    source: "K-Startup",
    link: "https://www.k-startup.go.kr/"
  },
  {
    title: "노인맞춤돌봄서비스",
    subtitle: "어르신 일상생활 및 안전 확인 지원",
    category: "노년·돌봄",
    age: ["60대", "70대"],
    region: ["전국"],
    target: "돌봄이 필요한 취약 어르신",
    amount: "안전확인·생활교육·서비스 연계 지원",
    deadline: "상시상담",
    status: "상시접수",
    description: "일상생활에 어려움이 있는 어르신에게 안전 확인, 생활교육, 사회참여, 민간서비스 연계 등을 제공하는 돌봄 서비스입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "노인장기요양보험",
    subtitle: "장기요양이 필요한 어르신 돌봄 지원",
    category: "노년·요양",
    age: ["60대", "70대"],
    region: ["전국"],
    target: "고령이나 노인성 질병으로 일상생활이 어려운 어르신",
    amount: "방문요양·시설급여 등 장기요양급여 지원",
    deadline: "상시신청",
    status: "상시접수",
    description: "일상생활을 혼자 수행하기 어려운 어르신에게 신체활동, 가사활동, 시설급여 등을 지원하는 사회보험 제도입니다.",
    source: "국민건강보험공단",
    link: "https://www.longtermcare.or.kr/"
  },
  {
    title: "기초연금 온라인 신청",
    subtitle: "만 65세 이상 어르신 소득지원",
    category: "노년·소득지원",
    age: ["60대", "70대"],
    region: ["전국"],
    target: "만 65세 이상 어르신 중 소득인정액 기준 충족자",
    amount: "소득 수준에 따라 매월 지급",
    deadline: "상시신청",
    status: "상시접수",
    description: "어르신의 노후 생활 안정을 위해 소득 기준에 따라 매월 연금을 지원하는 대표적인 노년 복지 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "노인일자리 여기",
    subtitle: "어르신 일자리 정보 통합 안내",
    category: "노년·일자리",
    age: ["60대", "70대"],
    region: ["전국"],
    target: "일자리와 사회활동 참여를 희망하는 어르신",
    amount: "사업 유형별 활동비 지급",
    deadline: "모집기간확인",
    status: "신청기간확인",
    description: "어르신이 참여할 수 있는 공익활동, 사회서비스형, 시장형 등 노인일자리 정보를 확인할 수 있는 서비스입니다.",
    source: "한국노인인력개발원",
    link: "https://www.seniorro.or.kr/"
  },
  {
    title: "치매안심센터",
    subtitle: "치매 상담·검진·관리 지원",
    category: "노년·의료지원",
    age: ["60대", "70대"],
    region: ["전국"],
    target: "치매가 의심되거나 치매 관리가 필요한 어르신 및 가족",
    amount: "상담·검진·등록관리 등 지원",
    deadline: "상시상담",
    status: "상시접수",
    description: "치매 예방, 조기검진, 상담, 가족지원 등 치매 관련 서비스를 제공하는 지역 기반 지원기관입니다.",
    source: "중앙치매센터",
    link: "https://www.nid.or.kr/"
  },
  {
    title: "치매치료관리비 지원",
    subtitle: "치매 약제비 및 진료비 부담 완화",
    category: "노년·의료지원",
    age: ["60대", "70대"],
    region: ["전국"],
    target: "치매 진단 후 치료제를 복용하는 지원 대상자",
    amount: "치매치료관리비 일부 지원",
    deadline: "지역별상담",
    status: "상시접수",
    description: "치매 치료제를 복용하는 어르신의 약제비와 진료비 부담을 줄이기 위한 의료비 지원 제도입니다.",
    source: "중앙치매센터",
    link: "https://ansim.nid.or.kr/"
  },
  {
    title: "독거노인 응급안전안심서비스",
    subtitle: "응급상황 감지 및 안전 확인",
    category: "노년·안전지원",
    age: ["60대", "70대"],
    region: ["전국"],
    target: "혼자 거주하는 어르신 및 취약가구",
    amount: "응급장비 설치 및 안전확인 지원",
    deadline: "상시상담",
    status: "상시접수",
    description: "화재, 활동 감지, 응급호출 등 장비를 통해 독거노인의 응급상황을 신속히 확인하고 대응하는 서비스입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "노인 무릎인공관절 수술비 지원",
    subtitle: "저소득 어르신 관절 수술비 지원",
    category: "노년·의료지원",
    age: ["60대", "70대"],
    region: ["전국"],
    target: "무릎관절 질환으로 수술이 필요한 저소득 어르신",
    amount: "수술비 일부 지원",
    deadline: "지역별상담",
    status: "신청기간확인",
    description: "경제적 이유로 무릎인공관절 수술을 받기 어려운 어르신에게 수술비 일부를 지원하는 제도입니다.",
    source: "보건복지부",
    link: "https://www.mohw.go.kr/"
  },
  {
    title: "노인 안검진 및 개안수술 지원",
    subtitle: "어르신 눈 건강 의료비 지원",
    category: "노년·의료지원",
    age: ["60대", "70대"],
    region: ["전국"],
    target: "안질환 검진 또는 수술이 필요한 저소득 어르신",
    amount: "안검진 및 개안수술비 지원",
    deadline: "지역별상담",
    status: "신청기간확인",
    description: "시력 저하로 생활에 어려움이 있는 어르신에게 안검진과 개안수술 비용을 지원하는 제도입니다.",
    source: "보건복지부",
    link: "https://www.mohw.go.kr/"
  },
  {
    title: "장애인활동지원",
    subtitle: "장애인 일상생활 및 사회활동 지원",
    category: "장애인·돌봄",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "일상생활과 사회활동에 도움이 필요한 등록장애인",
    amount: "활동지원급여 제공",
    deadline: "상시신청",
    status: "상시접수",
    description: "신체활동, 가사활동, 이동보조 등 장애인의 자립생활과 사회참여를 돕는 활동지원 서비스입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00003260"
  },
  {
    title: "장애수당",
    subtitle: "저소득 장애인 생활안정 지원",
    category: "장애인·소득지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "저소득 등록장애인 중 지원 요건 충족자",
    amount: "장애 정도 및 대상별 차등 지급",
    deadline: "상시신청",
    status: "상시접수",
    description: "저소득 장애인의 생활 안정을 위해 매월 수당을 지급하는 장애인 복지 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "장애아동수당",
    subtitle: "장애아동 양육가정 생활지원",
    category: "장애인·아동지원",
    age: ["20대", "30대", "40대", "50대"],
    region: ["전국"],
    target: "장애아동을 양육하는 저소득 가구",
    amount: "장애 정도 및 소득 기준에 따라 지급",
    deadline: "상시신청",
    status: "상시접수",
    description: "장애아동을 양육하는 가정의 경제적 부담을 줄이기 위해 지급되는 복지 수당입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "장애인 의료비 지원",
    subtitle: "장애인 의료비 본인부담 완화",
    category: "장애인·의료지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "의료비 부담이 있는 등록장애인 중 지원 대상자",
    amount: "진료비 본인부담금 일부 지원",
    deadline: "상시신청",
    status: "상시접수",
    description: "저소득 장애인의 의료기관 이용 부담을 줄이기 위해 의료비 일부를 지원하는 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "장애인 보조기기 지원",
    subtitle: "장애인 일상생활 보조기기 지원",
    category: "장애인·생활지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "보조기기가 필요한 등록장애인",
    amount: "보조기기 구입·교부 지원",
    deadline: "상시 또는 지역별 신청",
    status: "신청기간확인",
    description: "장애인의 일상생활과 이동 편의를 돕기 위해 필요한 보조기기 구입 또는 교부를 지원하는 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "발달재활서비스",
    subtitle: "장애아동 발달재활 치료 지원",
    category: "장애인·아동지원",
    age: ["20대", "30대", "40대"],
    region: ["전국"],
    target: "발달재활서비스가 필요한 장애아동 가정",
    amount: "바우처 형태 서비스 지원",
    deadline: "상시신청",
    status: "상시접수",
    description: "성장기 장애아동의 기능 향상과 행동 발달을 돕기 위해 재활치료 서비스를 지원하는 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "언어발달지원사업",
    subtitle: "장애부모 가정 아동 언어발달 지원",
    category: "장애인·아동지원",
    age: ["20대", "30대", "40대"],
    region: ["전국"],
    target: "장애 부모를 둔 비장애 아동 중 언어발달 지원이 필요한 아동",
    amount: "언어발달지원 서비스 바우처",
    deadline: "상시신청",
    status: "상시접수",
    description: "장애 부모 가정의 아동이 건강하게 성장할 수 있도록 언어발달 진단과 치료 서비스를 지원합니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "저소득층 에너지효율개선사업",
    subtitle: "취약계층 냉난방 환경 개선",
    category: "생활안정·에너지",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "에너지 이용 환경 개선이 필요한 저소득 가구",
    amount: "단열·창호·보일러 등 개선 지원",
    deadline: "사업기간확인",
    status: "신청기간확인",
    description: "저소득층 가구의 냉난방 효율을 높이고 에너지 비용 부담을 줄이기 위한 주거환경 개선 사업입니다.",
    source: "한국에너지재단",
    link: "https://www.koref.or.kr/"
  },
  {
    title: "전기요금 복지할인",
    subtitle: "취약계층 전기요금 감면",
    category: "생활안정·요금감면",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "기초생활수급자, 장애인, 국가유공자 등 감면 대상자",
    amount: "대상별 전기요금 감면",
    deadline: "상시신청",
    status: "상시접수",
    description: "취약계층의 전기요금 부담을 줄이기 위해 대상 조건에 따라 요금을 감면하는 제도입니다.",
    source: "한국전력공사",
    link: "https://cyber.kepco.co.kr/"
  },
  {
    title: "도시가스요금 경감",
    subtitle: "사회적 배려대상자 도시가스 요금 감면",
    category: "생활안정·요금감면",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "기초생활수급자, 장애인, 차상위계층 등 감면 대상자",
    amount: "대상별 도시가스요금 경감",
    deadline: "상시신청",
    status: "상시접수",
    description: "사회적 배려대상자의 난방비 부담을 줄이기 위해 도시가스요금을 경감하는 제도입니다.",
    source: "한국가스공사",
    link: "https://www.kogas.or.kr/"
  },
  {
    title: "통신요금 감면",
    subtitle: "취약계층 이동통신 요금 감면",
    category: "생활안정·요금감면",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "기초생활수급자, 차상위계층, 장애인 등",
    amount: "이동통신 요금 일부 감면",
    deadline: "상시신청",
    status: "상시접수",
    description: "취약계층의 통신비 부담을 줄이기 위해 이동통신 기본료와 통화료 등을 감면하는 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "TV수신료 면제",
    subtitle: "취약계층 방송수신료 면제",
    category: "생활안정·요금감면",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "수신료 면제 대상 가구",
    amount: "TV수신료 면제",
    deadline: "상시신청",
    status: "상시접수",
    description: "일정 요건을 충족하는 취약계층 가구의 TV수신료 부담을 줄여주는 요금 감면 제도입니다.",
    source: "한국전력공사",
    link: "https://cyber.kepco.co.kr/"
  },
  {
    title: "건강보험 본인부담상한제",
    subtitle: "과도한 의료비 부담 환급 지원",
    category: "의료비·환급",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "연간 건강보험 본인부담금이 개인별 상한액을 초과한 가입자",
    amount: "상한액 초과 본인부담금 환급",
    deadline: "상시조회",
    status: "상시조회",
    description: "연간 본인부담금이 개인별 상한액을 초과한 경우 초과금액을 국민건강보험공단이 부담하는 제도입니다.",
    source: "국민건강보험공단",
    link: "https://www.nhis.or.kr/static/html/wbma/c/wbmac0209.html"
  },
  {
    title: "암환자 의료비 지원",
    subtitle: "저소득 암환자 치료비 부담 완화",
    category: "의료지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "소득 기준 등을 충족하는 암환자",
    amount: "암 치료 관련 의료비 지원",
    deadline: "지역보건소상담",
    status: "신청기간확인",
    description: "암 진단과 치료로 경제적 부담을 겪는 환자에게 의료비 일부를 지원하는 제도입니다.",
    source: "국가암정보센터",
    link: "https://www.cancer.go.kr/"
  },
  {
    title: "희귀질환자 의료비 지원",
    subtitle: "희귀질환 진료비 부담 완화",
    category: "의료지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "지원 대상 희귀질환자 중 소득·재산 기준 충족자",
    amount: "요양급여 본인부담금 등 지원",
    deadline: "상시상담",
    status: "상시접수",
    description: "희귀질환자의 지속적인 치료 부담을 줄이기 위해 의료비 일부를 지원하는 제도입니다.",
    source: "질병관리청",
    link: "https://www.kdca.go.kr/"
  },
  {
    title: "재난적 의료비 지원사업",
    subtitle: "과도한 의료비 지출 가구 지원",
    category: "의료비·생활안정",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "질병·부상으로 의료비 부담이 과도한 가구",
    amount: "의료비 일부 지원",
    deadline: "신청기간확인",
    status: "신청기간확인",
    description: "소득 수준에 비해 과도한 의료비가 발생한 가구의 경제적 부담을 줄이기 위한 지원사업입니다.",
    source: "국민건강보험공단",
    link: "https://www.nhis.or.kr/"
  },
  {
    title: "긴급복지 의료지원",
    subtitle: "위기상황 가구 의료비 긴급지원",
    category: "의료지원·긴급복지",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "갑작스러운 질병·부상으로 의료비 부담이 큰 위기가구",
    amount: "의료비 긴급 지원",
    deadline: "상시상담",
    status: "상시접수",
    description: "갑작스러운 의료비 지출로 생계가 어려워진 가구를 대상으로 의료비 일부를 긴급 지원하는 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "복지멤버십 맞춤형급여안내",
    subtitle: "내가 받을 수 있는 복지서비스 자동 안내",
    category: "복지조회",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "복지서비스 안내를 받고 싶은 국민",
    amount: "개인별 맞춤 복지 안내",
    deadline: "상시신청",
    status: "상시접수",
    description: "한 번 신청하면 개인 상황에 맞는 복지서비스를 찾아 안내받을 수 있는 맞춤형 복지 안내 서비스입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "정부24 원스톱 서비스",
    subtitle: "생애주기별 정부서비스 통합 안내",
    category: "정부서비스조회",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "출산, 전입, 사망, 취업 등 생애주기별 서비스를 확인하려는 국민",
    amount: "서비스별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "생애주기와 상황별로 필요한 정부서비스를 한 번에 확인하고 신청할 수 있는 정부24 서비스입니다.",
    source: "정부24",
    link: "https://www.gov.kr/"
  },
  {
    title: "복지위기 알림",
    subtitle: "주변 위기가구 신고 및 도움 요청",
    category: "복지안전망",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "도움이 필요한 본인 또는 주변 위기가구",
    amount: "상담 및 복지서비스 연계",
    deadline: "상시이용",
    status: "상시접수",
    description: "경제적 어려움이나 돌봄 공백 등 위기상황에 놓인 가구를 알리고 복지서비스로 연결할 수 있는 제도입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "주거복지센터 상담",
    subtitle: "주거 취약계층 상담 및 지원 연계",
    category: "주거복지",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "주거비 부담 또는 주거불안이 있는 국민",
    amount: "상담 및 주거지원 연계",
    deadline: "상시상담",
    status: "상시접수",
    description: "주거 문제로 어려움을 겪는 국민에게 임대주택, 주거급여, 긴급 주거지원 등을 안내하는 상담 서비스입니다.",
    source: "마이홈포털",
    link: "https://www.myhome.go.kr/"
  },
  {
    title: "전세임대주택",
    subtitle: "저소득층 전세주택 임대 지원",
    category: "주거지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "무주택 저소득층 및 주거취약계층",
    amount: "전세임대 보증금 지원",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "기존 주택을 전세계약 후 저렴하게 재임대하여 주거 안정을 돕는 공공임대주택 제도입니다.",
    source: "LH청약플러스",
    link: "https://apply.lh.or.kr/"
  },
  {
    title: "영구임대주택",
    subtitle: "저소득층 장기 공공임대주택",
    category: "주거지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "생계·의료급여 수급자 등 주거취약계층",
    amount: "시세보다 낮은 임대료",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "저소득층의 장기적인 주거 안정을 위해 공급되는 공공임대주택 제도입니다.",
    source: "LH청약플러스",
    link: "https://apply.lh.or.kr/"
  },
  {
    title: "기존주택 매입임대",
    subtitle: "도심 내 저렴한 임대주택 지원",
    category: "주거지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "무주택 저소득층 및 청년·신혼부부 등",
    amount: "저렴한 임대료로 주택 공급",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "공공기관이 기존 주택을 매입해 주거 취약계층에게 저렴하게 임대하는 주거지원 제도입니다.",
    source: "LH청약플러스",
    link: "https://apply.lh.or.kr/"
  },
  {
    title: "자활근로사업",
    subtitle: "저소득층 자립 및 근로 기회 지원",
    category: "생활안정·일자리",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["전국"],
    target: "근로능력이 있는 저소득층",
    amount: "근로 기회 및 자활급여 지원",
    deadline: "상시상담",
    status: "상시접수",
    description: "저소득층이 근로 경험을 쌓고 자립할 수 있도록 일자리와 자활서비스를 제공하는 사업입니다.",
    source: "복지로",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    title: "서울복지포털 복지서비스",
    subtitle: "서울시민 복지서비스 통합 안내",
    category: "서울·복지",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["서울특별시"],
    target: "서울 거주 복지서비스 확인 희망자",
    amount: "서비스별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "서울시에서 운영하는 생활복지, 어르신, 장애인, 가족, 주거 관련 복지서비스를 확인할 수 있습니다.",
    source: "서울복지포털",
    link: "https://wis.seoul.go.kr/"
  },
  {
    title: "서울일자리포털",
    subtitle: "서울 구직·취업 지원 정보",
    category: "서울·일자리",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["서울특별시"],
    target: "서울 지역 구직자 및 취업 준비자",
    amount: "상담·교육·취업지원",
    deadline: "상시이용",
    status: "상시접수",
    description: "서울시 일자리 정보, 취업교육, 채용정보, 구직상담 등을 확인할 수 있는 공식 일자리 포털입니다.",
    source: "서울일자리포털",
    link: "https://job.seoul.go.kr/"
  },
  {
    title: "서울 소상공인 지원사업",
    subtitle: "서울 자영업자 경영 안정 지원",
    category: "서울·소상공인",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["서울특별시"],
    target: "서울 소재 소상공인 및 자영업자",
    amount: "사업별 차등 지원",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "서울 지역 소상공인과 자영업자를 대상으로 경영안정, 자금, 컨설팅, 재기 지원사업을 확인할 수 있습니다.",
    source: "서울특별시",
    link: "https://www.seoul.go.kr/"
  },
  {
    title: "서울 임산부 교통비 지원",
    subtitle: "서울 임산부 이동 편의 지원",
    category: "서울·출산육아",
    age: ["20대", "30대", "40대"],
    region: ["서울특별시"],
    target: "서울 거주 임산부",
    amount: "교통비 바우처 지원",
    deadline: "상시 또는 공고 확인",
    status: "신청기간확인",
    description: "서울 거주 임산부의 이동 편의를 돕기 위해 교통비를 지원하는 출산·육아 지원 제도입니다.",
    source: "서울특별시",
    link: "https://www.seoul.go.kr/"
  },
  {
    title: "서울 안심소득",
    subtitle: "서울형 소득보장 정책",
    category: "서울·생활안정",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["서울특별시"],
    target: "서울 거주 저소득 가구 중 시범사업 대상",
    amount: "소득 기준에 따라 차등 지원",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "소득이 낮은 서울시민의 생활 안정을 돕기 위해 운영되는 서울형 소득보장 정책입니다.",
    source: "서울특별시",
    link: "https://www.seoul.go.kr/"
  },
  {
    title: "경기도 여성취업지원금",
    subtitle: "경기 여성 구직활동 지원",
    category: "경기·여성취업",
    age: ["30대", "40대", "50대"],
    region: ["경기도"],
    target: "경기도 거주 미취업 여성 중 요건 충족자",
    amount: "구직활동비 지원",
    deadline: "모집기간확인",
    status: "신청기간확인",
    description: "경기도 거주 미취업 여성의 취업 준비와 구직활동을 돕기 위한 여성 취업 지원사업입니다.",
    source: "경기도일자리재단",
    link: "https://www.jobaba.net/"
  },
  {
    title: "경기도 산후조리비 지원",
    subtitle: "출산가정 산후조리비 부담 완화",
    category: "경기·출산육아",
    age: ["20대", "30대", "40대"],
    region: ["경기도"],
    target: "경기도 출산가정",
    amount: "출생아 기준 지역화폐 지원",
    deadline: "상시 또는 기간 확인",
    status: "신청기간확인",
    description: "경기도 출산가정의 산후조리비 부담을 줄이기 위해 지역화폐 형태로 지원하는 제도입니다.",
    source: "경기도청",
    link: "https://www.gg.go.kr/"
  },
  {
    title: "경기도 소상공인 지원",
    subtitle: "경기 소상공인 경영 안정 지원",
    category: "경기·소상공인",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["경기도"],
    target: "경기도 소재 소상공인 및 자영업자",
    amount: "사업별 차등 지원",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "경기도 소상공인의 경영 안정, 자금 지원, 컨설팅, 재기 지원 관련 사업을 확인할 수 있습니다.",
    source: "경기도청",
    link: "https://www.gg.go.kr/"
  },
  {
    title: "경기복지포털 복지서비스",
    subtitle: "경기도 복지정보 통합 안내",
    category: "경기·복지",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["경기도"],
    target: "경기도 복지서비스 확인 희망자",
    amount: "서비스별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "경기도민을 위한 복지, 주거, 돌봄, 생활안정 관련 지원 정보를 확인할 수 있습니다.",
    source: "경기도청",
    link: "https://www.gg.go.kr/"
  },
  {
    title: "부산 소상공인 지원사업",
    subtitle: "부산 자영업자 경영지원",
    category: "부산·소상공인",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["부산광역시"],
    target: "부산 소재 소상공인 및 자영업자",
    amount: "사업별 차등 지원",
    deadline: "부산시공고확인",
    status: "공고확인",
    description: "부산 지역 소상공인의 경영 안정, 자금, 교육, 컨설팅 등 지원사업을 확인할 수 있습니다.",
    source: "부산광역시",
    link: "https://www.busan.go.kr/"
  },
  {
    title: "부산 일자리정보망",
    subtitle: "부산 취업·구직 지원",
    category: "부산·일자리",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["부산광역시"],
    target: "부산 지역 구직자 및 취업 준비자",
    amount: "취업정보·교육·상담 지원",
    deadline: "상시이용",
    status: "상시접수",
    description: "부산 지역 채용정보, 일자리 정책, 취업지원 프로그램을 확인할 수 있는 일자리 정보 서비스입니다.",
    source: "부산광역시",
    link: "https://www.busan.go.kr/"
  },
  {
    title: "대구 행복페이 및 지역 지원사업",
    subtitle: "대구 시민 생활·소비 지원",
    category: "대구·생활지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["대구광역시"],
    target: "대구 시민 및 지역 소상공인",
    amount: "사업별 상이",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "대구 시민과 소상공인을 대상으로 한 지역경제, 생활안정, 소비지원 관련 정책을 확인할 수 있습니다.",
    source: "대구광역시",
    link: "https://www.daegu.go.kr/"
  },
  {
    title: "대구 일자리포털",
    subtitle: "대구 구직·취업 정보 안내",
    category: "대구·일자리",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["대구광역시"],
    target: "대구 지역 구직자 및 취업 준비자",
    amount: "상담·교육·채용정보 지원",
    deadline: "상시이용",
    status: "상시접수",
    description: "대구 지역 일자리 정보, 취업교육, 채용 지원 프로그램을 확인할 수 있는 취업지원 서비스입니다.",
    source: "대구광역시",
    link: "https://www.daegu.go.kr/"
  },
  {
    title: "인천 복지서비스 안내",
    subtitle: "인천 시민 복지 지원 정보",
    category: "인천·복지",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["인천광역시"],
    target: "인천 거주 복지서비스 확인 희망자",
    amount: "서비스별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "인천 시민을 위한 생활안정, 복지, 주거, 돌봄 관련 지원 정보를 확인할 수 있습니다.",
    source: "인천광역시",
    link: "https://www.incheon.go.kr/"
  },
  {
    title: "인천 소상공인 지원",
    subtitle: "인천 자영업자 경영 안정 지원",
    category: "인천·소상공인",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["인천광역시"],
    target: "인천 소재 소상공인 및 자영업자",
    amount: "사업별 차등 지원",
    deadline: "공고별 상이",
    status: "공고확인",
    description: "인천 소상공인을 위한 자금, 경영안정, 창업, 재기 관련 지원사업을 확인할 수 있습니다.",
    source: "인천광역시",
    link: "https://www.incheon.go.kr/"
  },
  {
    title: "광주 일자리 지원사업",
    subtitle: "광주 구직·취업 지원 정보",
    category: "광주·일자리",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["광주광역시"],
    target: "광주 지역 구직자 및 취업 준비자",
    amount: "사업별 상이",
    deadline: "광주시공고확인",
    status: "공고확인",
    description: "광주 시민을 위한 취업지원, 직업교육, 구직활동 관련 정보를 확인할 수 있습니다.",
    source: "광주광역시",
    link: "https://www.gwangju.go.kr/"
  },
  {
    title: "광주 복지지원사업",
    subtitle: "광주 시민 생활복지 안내",
    category: "광주·복지",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["광주광역시"],
    target: "광주 거주 복지서비스 확인 희망자",
    amount: "서비스별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "광주 시민을 대상으로 한 복지, 돌봄, 생활안정, 취약계층 지원 정보를 확인할 수 있습니다.",
    source: "광주광역시",
    link: "https://www.gwangju.go.kr/"
  },
  {
    title: "대전 일자리경제 지원",
    subtitle: "대전 취업·경제 지원 정보",
    category: "대전·일자리",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["대전광역시"],
    target: "대전 지역 구직자, 근로자, 소상공인",
    amount: "사업별 차등 지원",
    deadline: "대전시공고확인",
    status: "공고확인",
    description: "대전 시민의 취업, 창업, 소상공인 경영 안정 관련 지원사업을 확인할 수 있습니다.",
    source: "대전광역시",
    link: "https://www.daejeon.go.kr/"
  },
  {
    title: "울산 일자리 지원사업",
    subtitle: "울산 구직·취업 지원",
    category: "울산·일자리",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["울산광역시"],
    target: "울산 지역 구직자 및 취업 준비자",
    amount: "사업별 상이",
    deadline: "울산시공고확인",
    status: "공고확인",
    description: "울산 시민을 위한 일자리, 취업교육, 구직활동, 지역기업 채용 정보를 확인할 수 있습니다.",
    source: "울산광역시",
    link: "https://www.ulsan.go.kr/"
  },
  {
    title: "세종 복지서비스 안내",
    subtitle: "세종 시민 복지 지원 정보",
    category: "세종·복지",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["세종시"],
    target: "세종시 복지서비스 확인 희망자",
    amount: "서비스별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "세종시민을 위한 복지, 생활안정, 돌봄, 가족지원 관련 정보를 확인할 수 있습니다.",
    source: "세종특별자치시",
    link: "https://www.sejong.go.kr/"
  },
  {
    title: "강원 소상공인 지원사업",
    subtitle: "강원 자영업자 경영지원",
    category: "강원·소상공인",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["강원도"],
    target: "강원 지역 소상공인 및 자영업자",
    amount: "사업별 차등 지원",
    deadline: "강원도공고확인",
    status: "공고확인",
    description: "강원 지역 소상공인의 경영 안정과 지역경제 활성화를 위한 지원사업을 확인할 수 있습니다.",
    source: "강원특별자치도",
    link: "https://state.gwd.go.kr/"
  },
  {
    title: "충북 복지·일자리 지원",
    subtitle: "충북 도민 생활지원 정보",
    category: "충북·생활지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["충청북도"],
    target: "충북 거주 복지·일자리 정보 확인자",
    amount: "사업별 상이",
    deadline: "충북공고확인",
    status: "공고확인",
    description: "충북 도민을 위한 복지, 일자리, 소상공인, 생활안정 관련 지원사업을 확인할 수 있습니다.",
    source: "충청북도",
    link: "https://www.chungbuk.go.kr/"
  },
  {
    title: "충남 복지·경제 지원사업",
    subtitle: "충남 도민 생활경제 지원",
    category: "충남·생활지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["충청남도"],
    target: "충남 거주 복지·경제 지원 확인자",
    amount: "사업별 상이",
    deadline: "충남공고확인",
    status: "공고확인",
    description: "충남 도민을 위한 생활안정, 일자리, 복지, 경제 관련 지원사업을 확인할 수 있습니다.",
    source: "충청남도",
    link: "https://www.chungnam.go.kr/"
  },
  {
    title: "전북 민생·복지 지원사업",
    subtitle: "전북 도민 생활안정 지원",
    category: "전북·생활지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전라북도"],
    target: "전북 거주 생활지원 정보 확인자",
    amount: "사업별 상이",
    deadline: "전북공고확인",
    status: "공고확인",
    description: "전북 도민을 위한 복지, 일자리, 민생경제, 취약계층 지원사업을 확인할 수 있습니다.",
    source: "전북특별자치도",
    link: "https://www.jeonbuk.go.kr/"
  },
  {
    title: "전남 일자리·복지 지원",
    subtitle: "전남 도민 지원정책 안내",
    category: "전남·생활지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전라남도"],
    target: "전남 거주 일자리·복지 지원 확인자",
    amount: "사업별 상이",
    deadline: "전남공고확인",
    status: "공고확인",
    description: "전남 도민을 위한 일자리, 복지, 청년, 농어촌, 소상공인 지원사업을 확인할 수 있습니다.",
    source: "전라남도",
    link: "https://www.jeonnam.go.kr/"
  },
  {
    title: "경북 생활경제 지원사업",
    subtitle: "경북 도민 경제·복지 지원",
    category: "경북·생활지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["경상북도"],
    target: "경북 거주 지원사업 확인자",
    amount: "사업별 상이",
    deadline: "경북공고확인",
    status: "공고확인",
    description: "경북 도민을 위한 생활경제, 청년, 복지, 농업, 소상공인 관련 지원사업을 확인할 수 있습니다.",
    source: "경상북도",
    link: "https://www.gb.go.kr/"
  },
  {
    title: "경남 복지·일자리 지원",
    subtitle: "경남 도민 지원정책 안내",
    category: "경남·생활지원",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["경상남도"],
    target: "경남 거주 복지·일자리 지원 확인자",
    amount: "사업별 상이",
    deadline: "경남공고확인",
    status: "공고확인",
    description: "경남 도민을 위한 복지, 일자리, 청년, 소상공인, 생활안정 지원 정보를 확인할 수 있습니다.",
    source: "경상남도",
    link: "https://www.gyeongnam.go.kr/"
  },
  {
    title: "제주 일자리 지원",
    subtitle: "제주 구직·취업 지원 정보",
    category: "제주·일자리",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["제주도"],
    target: "제주 지역 구직자 및 취업 준비자",
    amount: "사업별 상이",
    deadline: "제주공고확인",
    status: "공고확인",
    description: "제주 지역 구직자와 근로자를 위한 일자리, 취업교육, 채용 지원 정보를 확인할 수 있습니다.",
    source: "제주특별자치도",
    link: "https://www.jeju.go.kr/"
  },
  {
    title: "제주 복지서비스",
    subtitle: "제주 도민 복지 지원 안내",
    category: "제주·복지",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["제주도"],
    target: "제주 거주 복지서비스 확인 희망자",
    amount: "서비스별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "제주 도민을 위한 복지, 돌봄, 생활안정, 취약계층 지원 정보를 확인할 수 있습니다.",
    source: "제주특별자치도",
    link: "https://www.jeju.go.kr/"
  },
  {
    title: "제주 소상공인 지원",
    subtitle: "제주 자영업자 경영 안정 지원",
    category: "제주·소상공인",
    age: ["20대", "30대", "40대", "50대", "60대"],
    region: ["제주도"],
    target: "제주 소재 소상공인 및 자영업자",
    amount: "사업별 차등 지원",
    deadline: "제주공고확인",
    status: "공고확인",
    description: "제주 지역 소상공인의 경영 안정, 자금, 재기, 창업 관련 지원사업을 확인할 수 있습니다.",
    source: "제주특별자치도",
    link: "https://www.jeju.go.kr/"
  },
  {
    title: "전국 지자체 지원사업 확인",
    subtitle: "지역별 지원금 및 복지사업 확인",
    category: "지역·통합조회",
    age: ["20대", "30대", "40대", "50대", "60대", "70대"],
    region: ["전국"],
    target: "지역별 지원사업을 확인하려는 국민",
    amount: "지역·사업별 상이",
    deadline: "상시조회",
    status: "상시조회",
    description: "각 지자체에서 운영하는 복지, 일자리, 청년, 소상공인, 생활안정 지원사업을 확인할 수 있습니다.",
    source: "정부24",
    link: "https://www.gov.kr/"
  }
  ];
/* =========================
   Credrix 정부지원금 검색 기능 코드
   위치: supportFinderData 배열 끝난 뒤 ]; 아래에 붙이기
========================= */

var supportFinderAllResults = [];
var supportFinderOriginalResults = [];
var supportFinderCurrentPage = 1;
var supportFinderItemsPerPage = 9;
var supportFinderCurrentSort = "recommended";

/* HTML 특수문자 보호 */
function supportFinderEscapeHTML(value) {
  if (value === undefined || value === null) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* 체크된 값 가져오기 */
function supportFinderGetCheckedValues(selector) {
  var checked = document.querySelectorAll(selector + " input[type='checkbox']:checked");
  var values = [];

  checked.forEach(function (input) {
    values.push(input.value);
  });

  return values;
}

/* 검색 실행 */
function supportFinderStartSearch() {
  var selectedAges = supportFinderGetCheckedValues(".age-grid");
  var selectedRegions = supportFinderGetCheckedValues(".region-grid");

  var resultsGrid = document.getElementById("supportFinderSupportGrid");
  var resultsCount = document.getElementById("supportFinderResultsCount");

  if (!resultsGrid || !resultsCount) {
    alert("검색 결과 영역을 찾을 수 없습니다.");
    return;
  }

  if (!Array.isArray(supportFinderData)) {
    resultsGrid.innerHTML = supportFinderNoResultHTML("지원금 데이터를 불러오지 못했습니다.");
    resultsCount.textContent = "0개 지원금";
    supportFinderHidePagination();
    supportFinderHideSortButtons();
    return;
  }

  if (selectedAges.length === 0 || selectedRegions.length === 0) {
    supportFinderOriginalResults = [];
    supportFinderAllResults = [];
    supportFinderCurrentPage = 1;

    resultsGrid.innerHTML = supportFinderNoResultHTML("연령대와 지역을 각각 1개 이상 선택해주세요.");
    resultsCount.textContent = "0개 지원금";
    supportFinderHidePagination();
    supportFinderHideSortButtons();
    supportFinderUpdateResultSummary(selectedAges, selectedRegions, 0);
    return;
  }

  var filtered = supportFinderData.filter(function (item) {
    var itemAge = Array.isArray(item.age) ? item.age : [];
    var itemRegion = Array.isArray(item.region) ? item.region : [];

    var ageMatch = selectedAges.some(function (age) {
      return itemAge.indexOf(age) !== -1;
    });

    var regionMatch = selectedRegions.some(function (region) {
      return itemRegion.indexOf(region) !== -1 || itemRegion.indexOf("전국") !== -1;
    });

    return ageMatch && regionMatch;
  });

  supportFinderOriginalResults = filtered.slice();
  supportFinderAllResults = filtered.slice();
  supportFinderCurrentPage = 1;
  supportFinderCurrentSort = "recommended";

  supportFinderUpdateResultSummary(selectedAges, selectedRegions, supportFinderAllResults.length);

  if (supportFinderAllResults.length === 0) {
    resultsGrid.innerHTML = supportFinderNoResultHTML("선택한 조건에 맞는 지원금이 없습니다.");
    supportFinderHidePagination();
    supportFinderHideSortButtons();
    return;
  }

  supportFinderShowSortButtons();
  supportFinderSetActiveSortButton("recommended");
  supportFinderDisplayCurrentPage();
  supportFinderUpdatePagination();
}

/* 결과 상단 조건 안내 */
function supportFinderUpdateResultSummary(ages, regions, count) {
  var resultsCount = document.getElementById("supportFinderResultsCount");
  if (resultsCount) {
    resultsCount.textContent = count + "개 지원금";
  }

  var resultsHeaderTitle = document.querySelector(".support-finder-results-header h2");
  if (resultsHeaderTitle) {
    resultsHeaderTitle.textContent = "선택 조건 맞춤 지원금";
  }

  var oldSummary = document.getElementById("supportFinderConditionSummary");
  if (oldSummary) oldSummary.remove();

  var header = document.querySelector(".support-finder-results-header");
  if (!header) return;

  var summary = document.createElement("div");
  summary.id = "supportFinderConditionSummary";

  var ageText = ages.length ? ages.join(", ") : "연령대 미선택";
  var regionText = regions.length ? regions.join(", ") : "지역 미선택";

  summary.innerHTML =
    "<strong>" +
    supportFinderEscapeHTML(ageText) +
    " · " +
    supportFinderEscapeHTML(regionText) +
    "</strong> 기준으로 조회 가능한 전국 공통 및 지역 지원 정보를 표시합니다.";

  header.appendChild(summary);
}

/* 결과 카드 출력 */
function supportFinderRenderCard(item) {
  var title = supportFinderEscapeHTML(item.title || "");
  var subtitle = supportFinderEscapeHTML(item.subtitle || "");
  var category = supportFinderEscapeHTML(item.category || "지원금");
  var target = supportFinderEscapeHTML(item.target || "대상자 확인 필요");
  var amount = supportFinderEscapeHTML(item.amount || "개인별 상이");
  var deadline = supportFinderEscapeHTML(item.deadline || "신청기간 확인");
  var status = supportFinderEscapeHTML(item.status || "신청기간확인");
  var description = supportFinderEscapeHTML(item.description || "");
  var source = supportFinderEscapeHTML(item.source || "공식기관");
  var link = item.link || "#";

  var statusClass = supportFinderGetStatusClass(item.status || "");
  var ddayText = supportFinderGetDdayText(item.deadline || "");
  var urgentClass = supportFinderIsUrgent(item.deadline || "") ? " urgent" : "";

  var statusDisplay = status;
  if (ddayText) {
    statusDisplay = ddayText;
  }

  return ''
    + '<div class="support-finder-support-card credrix-card' + urgentClass + '">'
    + '  <div class="credrix-card-top">'
    + '    <span class="credrix-category">' + category + '</span>'
    + '    <span class="credrix-source">' + source + '</span>'
    + '  </div>'
    + '  <h4><a href="' + supportFinderEscapeHTML(link) + '" target="_blank" rel="noopener noreferrer">' + title + '</a></h4>'
    + '  <p class="credrix-subtitle">' + subtitle + '</p>'
    + '  <p class="credrix-desc">' + description + '</p>'
    + '  <div class="credrix-info-block">'
    + '    <div class="credrix-info-label">지원내용</div>'
    + '    <div class="credrix-info-value">' + amount + '</div>'
    + '  </div>'
    + '  <div class="credrix-meta-row">'
    + '    <span class="credrix-status ' + statusClass + '">' + statusDisplay + '</span>'
    + '    <span class="credrix-deadline">' + deadline + '</span>'
    + '  </div>'
    + '  <div class="credrix-target">신청대상: ' + target + '</div>'
    + '  <a class="credrix-official-btn" href="' + supportFinderEscapeHTML(link) + '" target="_blank" rel="noopener noreferrer">공식 안내 바로가기 →</a>'
    + '</div>';
}

/* 빈 결과 */
function supportFinderNoResultHTML(message) {
  return ''
    + '<div class="support-finder-no-results">'
    + '  <div style="font-size:48px;margin-bottom:20px;">🔎</div>'
    + '  <div><strong>' + supportFinderEscapeHTML(message) + '</strong></div>'
    + '  <div style="font-size:14px;margin-top:10px;color:#666;">조건을 변경한 뒤 다시 검색해보세요.</div>'
    + '</div>';
}

/* 현재 페이지 출력 */
function supportFinderDisplayCurrentPage() {
  var resultsGrid = document.getElementById("supportFinderSupportGrid");
  if (!resultsGrid) return;

  var startIndex = (supportFinderCurrentPage - 1) * supportFinderItemsPerPage;
  var endIndex = startIndex + supportFinderItemsPerPage;
  var currentPageResults = supportFinderAllResults.slice(startIndex, endIndex);

  var html = "";

  currentPageResults.forEach(function (item) {
    html += supportFinderRenderCard(item);
  });

  resultsGrid.innerHTML = html;
}

/* 페이지네이션 */
function supportFinderUpdatePagination() {
  var totalPages = Math.ceil(supportFinderAllResults.length / supportFinderItemsPerPage);
  var pagination = document.getElementById("supportFinderPagination");
  var prevBtn = document.getElementById("supportFinderPrevBtn");
  var nextBtn = document.getElementById("supportFinderNextBtn");
  var pageNumbers = document.getElementById("supportFinderPageNumbers");

  if (!pagination || !prevBtn || !nextBtn || !pageNumbers) return;

  if (totalPages <= 1) {
    pagination.style.display = "none";
    return;
  }

  pagination.style.display = "flex";

  prevBtn.disabled = supportFinderCurrentPage === 1;
  nextBtn.disabled = supportFinderCurrentPage === totalPages;

  var html = "";
  var maxVisiblePages = 7;

  var startPage = Math.max(1, supportFinderCurrentPage - Math.floor(maxVisiblePages / 2));
  var endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (var i = startPage; i <= endPage; i++) {
    html += '<button class="support-finder-pagination-number ' + (i === supportFinderCurrentPage ? "active" : "") + '" onclick="supportFinderGoToPage(' + i + ')">' + i + '</button>';
  }

  pageNumbers.innerHTML = html;
}

function supportFinderChangePage(direction) {
  var totalPages = Math.ceil(supportFinderAllResults.length / supportFinderItemsPerPage);

  if (direction === -1 && supportFinderCurrentPage > 1) {
    supportFinderCurrentPage--;
  }

  if (direction === 1 && supportFinderCurrentPage < totalPages) {
    supportFinderCurrentPage++;
  }

  supportFinderDisplayCurrentPage();
  supportFinderUpdatePagination();
  supportFinderScrollToResults();
}

function supportFinderGoToPage(pageNumber) {
  supportFinderCurrentPage = pageNumber;
  supportFinderDisplayCurrentPage();
  supportFinderUpdatePagination();
  supportFinderScrollToResults();
}

function supportFinderHidePagination() {
  var pagination = document.getElementById("supportFinderPagination");
  if (pagination) pagination.style.display = "none";
}

function supportFinderScrollToResults() {
  var section = document.querySelector(".support-finder-results-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* 정렬 버튼 */
function supportFinderShowSortButtons() {
  var filterButtons = document.getElementById("supportFinderFilterButtons");
  if (!filterButtons) return;

  filterButtons.style.display = "flex";
  filterButtons.innerHTML =
    '<span class="support-finder-filter-label">정렬:</span>' +
    '<button class="support-finder-filter-btn active" id="supportFinderRecommendedSort" onclick="supportFinderSortResults(\'recommended\')">추천순</button>' +
    '<button class="support-finder-filter-btn" id="supportFinderDeadlineSort" onclick="supportFinderSortResults(\'deadline\')">신청상태순</button>' +
    '<button class="support-finder-filter-btn" id="supportFinderAmountSort" onclick="supportFinderSortResults(\'amount\')">지원금액순</button>' +
    '<button class="support-finder-filter-btn" id="supportFinderAgencySort" onclick="supportFinderSortResults(\'agency\')">공식기관순</button>';
}

function supportFinderHideSortButtons() {
  var filterButtons = document.getElementById("supportFinderFilterButtons");
  if (filterButtons) filterButtons.style.display = "none";
}

function supportFinderSetActiveSortButton(sortType) {
  document.querySelectorAll(".support-finder-filter-btn").forEach(function (btn) {
    btn.classList.remove("active");
  });

  var map = {
    recommended: "supportFinderRecommendedSort",
    deadline: "supportFinderDeadlineSort",
    amount: "supportFinderAmountSort",
    agency: "supportFinderAgencySort"
  };

  var activeBtn = document.getElementById(map[sortType]);
  if (activeBtn) activeBtn.classList.add("active");
}

function supportFinderSortResults(sortType) {
  supportFinderCurrentSort = sortType;
  supportFinderCurrentPage = 1;
  supportFinderSetActiveSortButton(sortType);

  if (sortType === "recommended") {
    supportFinderAllResults = supportFinderOriginalResults.slice();
  }

  if (sortType === "deadline") {
    supportFinderAllResults = supportFinderOriginalResults.slice().sort(function (a, b) {
      return supportFinderStatusScore(a.status, a.deadline) - supportFinderStatusScore(b.status, b.deadline);
    });
  }

  if (sortType === "amount") {
    supportFinderAllResults = supportFinderOriginalResults.slice().sort(function (a, b) {
      return supportFinderParseAmount(b.amount) - supportFinderParseAmount(a.amount);
    });
  }

  if (sortType === "agency") {
    supportFinderAllResults = supportFinderOriginalResults.slice().sort(function (a, b) {
      return String(a.source || "").localeCompare(String(b.source || ""), "ko");
    });
  }

  supportFinderDisplayCurrentPage();
  supportFinderUpdatePagination();
}

/* 상태 점수 */
function supportFinderStatusScore(status, deadline) {
  if (supportFinderIsUrgent(deadline || "")) return 0;

  status = status || "";

  if (status.indexOf("상시접수") !== -1) return 1;
  if (status.indexOf("상시조회") !== -1) return 2;
  if (status.indexOf("신청기간") !== -1) return 3;
  if (status.indexOf("공고") !== -1) return 4;

  return 9;
}

/* 금액 파싱 */
function supportFinderParseAmount(amountText) {
  if (!amountText) return 0;

  var text = String(amountText);
  var nums = text.match(/\d+/g);
  if (!nums) return 0;

  var max = 0;

  nums.forEach(function (num) {
    var n = parseInt(num, 10);

    if (text.indexOf("억") !== -1) {
      n = n * 100000000;
    } else if (text.indexOf("천만") !== -1) {
      n = n * 10000000;
    } else if (text.indexOf("만") !== -1) {
      n = n * 10000;
    }

    if (n > max) max = n;
  });

  return max;
}

/* 날짜 파싱 */
function supportFinderParseDate(deadline) {
  if (!deadline) return null;

  var text = String(deadline);

  var dday = text.match(/D-(\d+)/i);
  if (dday) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    today.setDate(today.getDate() + parseInt(dday[1], 10));
    return today;
  }

  var dateMatch = text.match(/(\d{4})[-.\/](\d{1,2})[-.\/](\d{1,2})/);
  if (dateMatch) {
    return new Date(
      parseInt(dateMatch[1], 10),
      parseInt(dateMatch[2], 10) - 1,
      parseInt(dateMatch[3], 10)
    );
  }

  return null;
}

/* D-day 표시 */
function supportFinderGetDdayText(deadline) {
  var date = supportFinderParseDate(deadline);
  if (!date) return "";

  var today = new Date();
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  var diff = Math.ceil((date - today) / (1000 * 60 * 60 * 24));

  if (diff < 0) return "마감";
  if (diff === 0) return "D-Day";
  return "D-" + diff;
}

/* 마감 임박 */
function supportFinderIsUrgent(deadline) {
  var date = supportFinderParseDate(deadline);
  if (!date) return false;

  var today = new Date();
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  var diff = Math.ceil((date - today) / (1000 * 60 * 60 * 24));

  return diff >= 0 && diff <= 7;
}

/* 상태 클래스 */
function supportFinderGetStatusClass(status) {
  if (!status) return "status-default";

  if (status.indexOf("상시접수") !== -1) return "status-open";
  if (status.indexOf("상시조회") !== -1) return "status-check";
  if (status.indexOf("신청기간") !== -1) return "status-period";
  if (status.indexOf("공고") !== -1) return "status-notice";

  return "status-default";
}

/* 체크박스 UI */
function supportFinderInitCheckboxUI() {
  document.querySelectorAll(".support-finder-checkbox-item").forEach(function (box) {
    var input = box.querySelector("input[type='checkbox']");
    if (!input) return;

    box.classList.toggle("checked", input.checked);

    box.addEventListener("click", function (event) {
      if (event.target.tagName === "INPUT") {
        setTimeout(function () {
          box.classList.toggle("checked", input.checked);
        }, 0);
        return;
      }

      event.preventDefault();
      input.checked = !input.checked;
      box.classList.toggle("checked", input.checked);
    });
  });
}

/* 디자인 CSS 주입 */
function supportFinderInjectCustomStyle() {
  if (document.getElementById("credrixSupportFinderStyle")) return;

  var style = document.createElement("style");
  style.id = "credrixSupportFinderStyle";

  style.innerHTML = `
    .support-finder-container {
      max-width: 920px;
      margin: 0 auto;
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: #1f2937;
    }

    .support-finder-header {
      background: linear-gradient(135deg, #003478 0%, #001A6E 100%);
      border-radius: 18px;
      padding: 26px 22px;
      color: #ffffff;
      margin-bottom: 16px;
      box-shadow: 0 6px 20px rgba(0, 26, 110, 0.18);
    }

    .support-finder-header h1 {
      font-size: 1.45rem;
      line-height: 1.4;
      margin: 0 0 8px;
      font-weight: 900;
    }

    .support-finder-header p {
      font-size: 0.92rem;
      line-height: 1.7;
      margin: 0;
      opacity: 0.9;
    }

    .support-finder-filter-section,
    .support-finder-results-section {
      background: #ffffff;
      border: 1px solid #dbe3ef;
      border-radius: 18px;
      padding: 22px;
      margin-bottom: 18px;
    }

    .support-finder-filter-group {
      margin-bottom: 22px;
    }

    .support-finder-filter-group h3 {
      font-size: 1rem;
      color: #111827;
      font-weight: 900;
      margin: 0 0 12px;
    }

    .support-finder-checkbox-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 9px;
    }

    .support-finder-checkbox-item {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #f8fafc;
      border: 1.5px solid #e2e8f0;
      border-radius: 12px;
      padding: 11px 12px;
      cursor: pointer;
      transition: all 0.15s;
      user-select: none;
    }

    .support-finder-checkbox-item:hover {
      border-color: #003478;
      background: #f0f6ff;
    }

    .support-finder-checkbox-item.checked {
      background: #e7f0ff;
      border-color: #003478;
    }

    .support-finder-checkbox-item input {
      width: 16px;
      height: 16px;
      accent-color: #003478;
      flex-shrink: 0;
    }

    .support-finder-checkbox-item label {
      font-size: 0.85rem;
      font-weight: 700;
      color: #334155;
      cursor: pointer;
    }

    .support-finder-search-button {
      width: 100%;
      background: #dc2626;
      color: #ffffff;
      border: none;
      border-radius: 12px;
      padding: 16px;
      font-size: 1rem;
      font-weight: 900;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(220,38,38,0.22);
    }

    .support-finder-search-button:hover {
      background: #b91c1c;
    }

    .support-finder-results-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 14px;
    }

    .support-finder-results-header h2 {
      font-size: 1.05rem;
      color: #111827;
      font-weight: 900;
      margin: 0;
    }

    .support-finder-results-count {
      background: #003478;
      color: #ffffff;
      padding: 7px 14px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 900;
    }

    #supportFinderConditionSummary {
      width: 100%;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 11px 13px;
      color: #475569;
      font-size: 0.85rem;
      line-height: 1.65;
    }

    #supportFinderConditionSummary strong {
      color: #003478;
    }

    .support-finder-filter-buttons {
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      padding: 12px 0 16px;
      border-bottom: 1px solid #eef2f7;
      margin-bottom: 16px;
    }

    .support-finder-filter-label {
      font-size: 0.82rem;
      font-weight: 800;
      color: #475569;
    }

    .support-finder-filter-btn {
      background: #f1f5f9;
      color: #475569;
      border: 1px solid #dbe3ef;
      border-radius: 999px;
      padding: 7px 13px;
      font-size: 0.78rem;
      font-weight: 800;
      cursor: pointer;
    }

    .support-finder-filter-btn.active {
      background: #003478;
      color: #ffffff;
      border-color: #003478;
    }

    .support-finder-support-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .credrix-card {
      background: #ffffff;
      border: 1px solid #dbe3ef;
      border-top: 4px solid #003478;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
    }

    .credrix-card.urgent {
      border-top-color: #dc2626;
    }

    .credrix-card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }

    .credrix-category {
      display: inline-block;
      background: #e7f0ff;
      color: #003478;
      border: 1px solid #b7cbed;
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 12px;
      font-weight: 900;
    }

    .credrix-source {
      font-size: 12px;
      color: #64748b;
      font-weight: 800;
      text-align: right;
    }

    .credrix-card h4 {
      font-size: 1.08rem;
      color: #111827;
      margin: 0 0 8px;
      line-height: 1.45;
      font-weight: 900;
    }

    .credrix-card h4 a {
      color: inherit;
      text-decoration: none;
    }

    .credrix-subtitle {
      font-size: 0.88rem;
      color: #475569;
      margin: 0 0 9px;
      font-weight: 700;
    }

    .credrix-desc {
      font-size: 0.84rem;
      color: #4b5563;
      line-height: 1.75;
      margin: 0 0 14px;
    }

    .credrix-info-block {
      background: #f1f5f9;
      border: 1px solid #dbe3ef;
      border-radius: 12px;
      padding: 12px 14px;
      margin-bottom: 12px;
    }

    .credrix-info-label {
      font-size: 12px;
      color: #003478;
      font-weight: 900;
      margin-bottom: 4px;
    }

    .credrix-info-value {
      font-size: 0.88rem;
      color: #111827;
      font-weight: 900;
      line-height: 1.5;
    }

    .credrix-meta-row {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 10px;
    }

    .credrix-status {
      display: inline-block;
      border-radius: 999px;
      padding: 5px 9px;
      font-size: 12px;
      font-weight: 900;
    }

    .status-open { background: #dcfce7; color: #15803d; }
    .status-check { background: #e0f2fe; color: #0369a1; }
    .status-period { background: #fef3c7; color: #92400e; }
    .status-notice { background: #f3e8ff; color: #6b21a8; }
    .status-default { background: #e5e7eb; color: #374151; }

    .credrix-deadline {
      font-size: 12px;
      color: #64748b;
      font-weight: 800;
    }

    .credrix-target {
      font-size: 12px;
      color: #64748b;
      line-height: 1.65;
      margin: 10px 0 14px;
    }

    .credrix-official-btn {
      display: block;
      width: 100%;
      background: #dc2626;
      color: #ffffff !important;
      text-align: center;
      text-decoration: none !important;
      border-radius: 10px;
      padding: 12px 14px;
      font-size: 14px;
      font-weight: 900;
      margin-top: 12px;
    }

    .credrix-official-btn:hover {
      background: #b91c1c;
    }

    .support-finder-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6px;
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid #eef2f7;
      flex-wrap: wrap;
    }

    .support-finder-pagination-btn,
    .support-finder-pagination-number {
      background: #f1f5f9;
      color: #475569;
      border: 1px solid #dbe3ef;
      border-radius: 8px;
      padding: 8px 12px;
      font-size: 0.82rem;
      font-weight: 800;
      cursor: pointer;
    }

    .support-finder-pagination-number.active {
      background: #003478;
      color: #ffffff;
      border-color: #003478;
    }

    .support-finder-pagination-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .support-finder-no-results {
      text-align: center;
      padding: 42px 20px;
      color: #64748b;
    }

    @media (max-width: 768px) {
      .support-finder-checkbox-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .support-finder-filter-section,
      .support-finder-results-section {
        padding: 18px;
      }
    }

    @media (max-width: 480px) {
      .support-finder-checkbox-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  document.head.appendChild(style);
}

/* 초기화 */
document.addEventListener("DOMContentLoaded", function () {
  supportFinderInjectCustomStyle();
  supportFinderInitCheckboxUI();
});
