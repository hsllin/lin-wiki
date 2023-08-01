import React from 'react';
import styles from '@site/src/components/DayAndNight/styles.module.scss';
import clsx from 'clsx';

export default function DayAndNight(){
return(
	 <div class={styles['wrapper']}>
		<div class={styles['bg']}>
			<div class={styles['rotate']}>
				<div class={styles['rotation']}>
					<div class={styles['sun']}></div>
				</div>
					<div class={styles['moon']}></div>
				</div>
			</div> 

		<svg class={styles['mount-2']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path fill="#161840" fill-opacity="1" d="M0,0L6.9,21.3C13.7,43,27,85,41,106.7C54.9,128,69,128,82,122.7C96,117,110,107,123,90.7C137.1,75,151,53,165,42.7C178.3,32,192,32,206,69.3C219.4,107,233,181,247,218.7C260.6,256,274,256,288,245.3C301.7,235,315,213,329,192C342.9,171,357,149,370,144C384,139,398,149,411,160C425.1,171,439,181,453,181.3C466.3,181,480,171,494,154.7C507.4,139,521,117,535,96C548.6,75,562,53,576,58.7C589.7,64,603,96,617,112C630.9,128,645,128,658,149.3C672,171,686,213,699,234.7C713.1,256,727,256,741,256C754.3,256,768,256,782,250.7C795.4,245,809,235,823,234.7C836.6,235,850,245,864,245.3C877.7,245,891,235,905,245.3C918.9,256,933,288,946,282.7C960,277,974,235,987,213.3C1001.1,192,1015,192,1029,202.7C1042.3,213,1056,235,1070,202.7C1083.4,171,1097,85,1111,74.7C1124.6,64,1138,128,1152,160C1165.7,192,1179,192,1193,186.7C1206.9,181,1221,171,1234,154.7C1248,139,1262,117,1275,117.3C1289.1,117,1303,139,1317,165.3C1330.3,192,1344,224,1358,240C1371.4,256,1385,256,1399,261.3C1412.6,267,1426,277,1433,282.7L1440,288L1440,320L1433.1,320C1426.3,320,1413,320,1399,320C1385.1,320,1371,320,1358,320C1344,320,1330,320,1317,320C1302.9,320,1289,320,1275,320C1261.7,320,1248,320,1234,320C1220.6,320,1207,320,1193,320C1179.4,320,1166,320,1152,320C1138.3,320,1125,320,1111,320C1097.1,320,1083,320,1070,320C1056,320,1042,320,1029,320C1014.9,320,1001,320,987,320C973.7,320,960,320,946,320C932.6,320,919,320,905,320C891.4,320,878,320,864,320C850.3,320,837,320,823,320C809.1,320,795,320,782,320C768,320,754,320,741,320C726.9,320,713,320,699,320C685.7,320,672,320,658,320C644.6,320,631,320,617,320C603.4,320,590,320,576,320C562.3,320,549,320,535,320C521.1,320,507,320,494,320C480,320,466,320,453,320C438.9,320,425,320,411,320C397.7,320,384,320,370,320C356.6,320,343,320,329,320C315.4,320,302,320,288,320C274.3,320,261,320,247,320C233.1,320,219,320,206,320C192,320,178,320,165,320C150.9,320,137,320,123,320C109.7,320,96,320,82,320C68.6,320,55,320,41,320C27.4,320,14,320,7,320L0,320Z"></path>
		</svg>
		<svg class={styles['mount-1']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path fill="#231526" fill-opacity="1" d="M0,128L6.9,133.3C13.7,139,27,149,41,176C54.9,203,69,245,82,272C96,299,110,309,123,288C137.1,267,151,213,165,192C178.3,171,192,181,206,165.3C219.4,149,233,107,247,112C260.6,117,274,171,288,197.3C301.7,224,315,224,329,240C342.9,256,357,288,370,293.3C384,299,398,277,411,261.3C425.1,245,439,235,453,240C466.3,245,480,267,494,245.3C507.4,224,521,160,535,154.7C548.6,149,562,203,576,218.7C589.7,235,603,213,617,208C630.9,203,645,213,658,202.7C672,192,686,160,699,154.7C713.1,149,727,171,741,149.3C754.3,128,768,64,782,64C795.4,64,809,128,823,138.7C836.6,149,850,107,864,128C877.7,149,891,235,905,234.7C918.9,235,933,149,946,138.7C960,128,974,192,987,218.7C1001.1,245,1015,235,1029,197.3C1042.3,160,1056,96,1070,90.7C1083.4,85,1097,139,1111,181.3C1124.6,224,1138,256,1152,234.7C1165.7,213,1179,139,1193,112C1206.9,85,1221,107,1234,138.7C1248,171,1262,213,1275,224C1289.1,235,1303,213,1317,208C1330.3,203,1344,213,1358,192C1371.4,171,1385,117,1399,106.7C1412.6,96,1426,128,1433,144L1440,160L1440,320L1433.1,320C1426.3,320,1413,320,1399,320C1385.1,320,1371,320,1358,320C1344,320,1330,320,1317,320C1302.9,320,1289,320,1275,320C1261.7,320,1248,320,1234,320C1220.6,320,1207,320,1193,320C1179.4,320,1166,320,1152,320C1138.3,320,1125,320,1111,320C1097.1,320,1083,320,1070,320C1056,320,1042,320,1029,320C1014.9,320,1001,320,987,320C973.7,320,960,320,946,320C932.6,320,919,320,905,320C891.4,320,878,320,864,320C850.3,320,837,320,823,320C809.1,320,795,320,782,320C768,320,754,320,741,320C726.9,320,713,320,699,320C685.7,320,672,320,658,320C644.6,320,631,320,617,320C603.4,320,590,320,576,320C562.3,320,549,320,535,320C521.1,320,507,320,494,320C480,320,466,320,453,320C438.9,320,425,320,411,320C397.7,320,384,320,370,320C356.6,320,343,320,329,320C315.4,320,302,320,288,320C274.3,320,261,320,247,320C233.1,320,219,320,206,320C192,320,178,320,165,320C150.9,320,137,320,123,320C109.7,320,96,320,82,320C68.6,320,55,320,41,320C27.4,320,14,320,7,320L0,320Z"></path>
		</svg>

	</div>
);
}

{/* <div class={styles['wrapper']}>
		<div class={styles['bg']}>
			<div class={styles['rotate']}>
				<div class={styles['rotation']}>
				</div>
					<div class={styles['sun']}></div>
					<div class={styles['moon']}></div>
				</div>
			</div> */}