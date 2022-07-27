            

            
            var date = new Date();
			
			// 달력 연도
			var calendarYear = date.getFullYear();
			// 달력 월
			var calendarMonth = date.getMonth() + 1;
			// 달력 일
			var calendarToday = date.getDate();
			
			var monthLastDate = new Date(calendarYear, calendarMonth, 0);
			// 달력 월의 마지막 일
			var calendarMonthLastDate = monthLastDate.getDate();
			
			var monthStartDay = new Date(calendarYear, date.getMonth(), 1);
			// 달력 월의 시작 요일
			var calendarMonthStartDay = monthStartDay.getDay();
			
			// 주 카운트
			var calendarWeekCount = Math.ceil((calendarMonthStartDay + calendarMonthLastDate) / 7);
			
			var html = "";
			html += "<table>";
			html += "<caption style=\"font-size: larger; font-weight: bolder; color: red; text-align: left; padding: 10px 20px;\">" + calendarMonth + "월</caption>";
			html += "<thead>";
			html += "<tr>";
			html += "<th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>";
			html += "</tr>";
			html += "</thead>";
			html += "<tbody>";
			// 위치
			var calendarPos = 0;
			// 날짜
			var calendarDay = 0;
			for (var index1 = 0; index1 < calendarWeekCount; index1++) {
				html += "<tr>";
				for (var index2 = 0; index2 < 7; index2++) {
					html += "<td style=\"padding: 10px 10px; text-align: center;\">";
					if (calendarMonthStartDay <= calendarPos && calendarDay < calendarMonthLastDate) {
						calendarDay++;
						html += "<span style=\"display: block; padding: 10px 10px;";
						if (calendarDay == calendarToday) {
							html += " border: 1px solid red; border-radius: 50%; color: white; background-color: red;";
						}
						html += "\">" + calendarDay + "</span>";
					}
					html += "</td>";
					calendarPos++;
				}
				html += "</tr>";
			}
			html += "</tbody>";
			html += "</table>";
			$("#calendar").html(html);