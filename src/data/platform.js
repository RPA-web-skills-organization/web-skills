export const platformCollection = {
	name: "Platform",
	areas: [
		{	
			// SNS 중심의 플랫폼
			name: "SNS 중심의 플랫폼",
			skills: [
				{											
					name:"Facebook",
					description: {
						text: "Facebook 계정을 만들거나 로그인하세요. 친구, 가족, 아는 사람들과 사진과 동영상을 공유하고 메시지를 보내며 서로의 소식을 확인할 수 있습니다.",
						links: [
							["Facebook - 페이스북", "https://facebook.com/"],
							["페이스북 위키디피아 - 페이스북 정보", "https://ko.wikipedia.org/wiki/%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%B6%81"],
							["페이스북 가이드 - 페이스북이 사용하기 어려운 경우", "https://www.youtube.com/watch?v=lFMhdZkJK4g"],
						],					
					},
						skills: [
							{
								name: "FaceBook 서비스 약관",
								description: {
									text: "페이스북의 규정 및 서비스 약관을 확인하세요. 중요할지도 모릅니다!",
									links: [
										["페이스북 서비스 약관 - 페이스북의 서비스약관", "https://ko-kr.facebook.com/terms.php"],
										["페이스북 개인정보 보호 규정- Hiding and updating content", "https://ko-kr.facebook.com/business/GDPR"],
										],
									}
								},
							]
										
				},
				{
					name: "Instagram",
					description: {
						text: "인스타그램에서 자신을 다른 사람에게 보여주세요!",
						links: [
							["Instagram - 인스타그램은 여러분을 환영합니다", "https://www.instagram.com"],
						]
					},
					skills: [
						{
							name: "Instagram 서비스 약관",
							description: {
								text: "Learn how to use ARIA descriptions an labels to help assistive technology understanding your website.",
								links: [
									["Instagram 서비스 약관 - ARIA Labels", "https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships"],
									["Instagram 법률 고지 - Hiding and updating content", "https://developers.google.com/web/fundamentals/accessibility/semantics-aria/hiding-and-updating-content"],
									["The A11Y Project - ARIA States", "https://a11yproject.com/posts/ARIA-states/"],
									["The A11Y Project - ARIA Properties", "https://a11yproject.com/posts/ARIA-properties/"],
								]
							}
						},
					]
				},
				{
					name: "LinkedIn",
					description: {
						text: "취업과 관련된 커뮤니티입니다. 잘 활용한다면 큰 도움이 될 것입니다.",
						links: [
							["LinkedIn - 프로들을 위한 커뮤니티", "https://linkedin.com/"],
						]
					},
					skills: [
						{
							name: "LinkedIn 서비스 약관",
							description: {
								text: "LinkedIn 서비스 약관 및 법률 관련",
								links: [
									["LinkedIn 서비스 약관 - Accessibility audits", "https://web.dev/lighthouse-accessibility"],
								]
							}
						}
					]

				},
				{
					name: "Twitter",
					description: {
						text: "트위터는 실시간으로 다양한 정보를 많은 사람들과 공유합니다!",
						links: [
							["Twitter - 트위터를 통해 다양한 사람들과 소통해보세요!", "https://twitter.com/"],
						],
					},
					skills: [
						{
							name: "Twitter 서비스 약관",
							description: {
								text: "Twitter 서비스 약관을 참고하세요. 언젠가 도움이 될 것입니다!",
								links: [
									["Twitter 서비스 약관 - ARIA Labels", "https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships"],
								]
							}
						},
					]
				},
			],
			
		},		
		{
		// 동영상 위주의 플랫폼
		name: "동영상 중심의 플랫폼",
		skills: [
			{
			name: "Youtube",
			description: {
				text: " YouTube에서 마음에 드는 동영상과 음악을 감상하고, 직접 만든 콘텐츠를 업로드하여 친구, 가족뿐 아니라 전 세계 사람들과 콘텐츠를 공유할 수 있습니다.",
				links: [
					["유튜브 - 대표적인 동영상 플랫폼", "https://www.youtube.com/"],
				]
			},
			skills: [
				{
					name: "Youtube 서비스 약관",
					description: {
						text: "유튜브의 서비스 약관을 확인하세요. 언젠가 도움이 될 것 입니다.",
						links: [
							["Google Devs - ARIA Labels", "https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships"],
							["Google Devs - Hiding and updating content", "https://developers.google.com/web/fundamentals/accessibility/semantics-aria/hiding-and-updating-content"],
							["The A11Y Project - ARIA States", "https://a11yproject.com/posts/ARIA-states/"],
							["The A11Y Project - ARIA Properties", "https://a11yproject.com/posts/ARIA-properties/"],
								]
							}
						},
					]
				},
				{
					name: "TikTok",
					description: {
						text: "당신의 모든 것을 존중",
						links: [
							["TikTok - 쇼츠 동영상으로 다른 사람에게 재미를 선사하세요!", "https://www.tiktok.com/"]
						]
					},
					skills: [
						{
							name: "TikTok 서비스 약관",
							description: {
								text: "Tiktok의 서비스 약관을 확인하세요. 언젠가 도움이 될 것 입니다.",
								links: [
									["TikTok 서비스 약관 - ARIA Labels", "https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships"],
								]
							}
						},
					]
				},
			]
			 
		},
		{
			// 포토그라피 중심의 플랫폼
			name: "포토그라피 중심의 플랫폼",
			skills: [
				{
					name: "Pinterest",
					description: {
						text: "많은 사람들과 정보를 포토그라피로 공유해보세요!",
						links: [
							["Pinterest - 포토그라피 중심의 대표적인 플랫폼.", "https://www.pinterest.co.kr/"],
						]
					},
					skills: [
						{
							name: "Pinterest 서비스 약관",
							description: {
								text: "Reddit의 서비스 약관을 확인하세요. 언젠가 도움이 될 것 입니다.",
								links: [
									["Pinterest 서비스 약관	 - ARIA Labels", "https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships"],
								]
							}
						},
					]
				},
			]
		},
		{
			// 커뮤니티 중심의 플랫폼
			name: "커뮤니티 중심의 플랫폼",
			skills: [
				{
					name: "Reddit",
					description: {
						text: "미국의 대표적인 커뮤니티 사이트입니다. 영미권 사람들과 다양한 의사소통을 해보세요!",
						links: [
							["Reddit - 다양한 주제를 이용해 사람들과 소통하세요.", "https://www.reddit.com/"],
						]
					},
					skills: [
						{
							name: "Reddit 서비스 약관",
							description: {
								text: "Reddit의 서비스 약관을 확인하세요. 언젠가 도움이 될 것 입니다.",
								links: [
									["Reddit - Accessibility audits", "https://web.dev/lighthouse-accessibility"],
								]
							}
						}
					]
				},
				{
					name: "인벤",
					description: {
						text: "대한민국의 게임 전문 웹진이자 커뮤니티",
						links: [
							["인벤 - 다양한 게임 정보를 이곳에서 알아보세요!", "https://www.inven.co.kr/"],
						]
					},
					skills: [
						{
							name: "인벤 서비스 약관",
							description: {
								text: "인벤의 서비스 약관을 확인하세요. 언젠가 도움이 될 것 입니다.",
								links: [
									["Google Devs - ARIA Labels", "https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships"],
								]
							}
						},
					]
				},
				{
					name: "디시인사이드",
					description: {
						text: "대한민국 최대 커뮤니티 디시인사이드입니다.",
						links: [
							["디시인사이드 - 다양한 주제를 통해 다른 사람과 소통해보세요!", "https://www.dcinside.com/"],
						]
					},
					skills: [
						{
							name: "디시인사이드 서비스 약관",
							description: {
								text: "디시인사이드의 서비스 약관을 확인하세요. 언젠가 도움이 될 것 입니다!",
								links: [
									["디시인사이드 서비스약관 - Accessibility audits", "https://web.dev/lighthouse-accessibility"],
								]
							}
						}
					]
				},
			]	
		},
	]
};