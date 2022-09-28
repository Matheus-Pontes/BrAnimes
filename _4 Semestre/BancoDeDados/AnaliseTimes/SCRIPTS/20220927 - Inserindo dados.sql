IF NOT EXISTS(SELECT * FROM Estados)
BEGIN
	INSERT INTO Estados VALUES (1,'AC');
	INSERT INTO Estados VALUES (2,'AL');
	INSERT INTO Estados VALUES (3,'AP');
	INSERT INTO Estados VALUES (4,'AM');
	INSERT INTO Estados VALUES (5,'BA');
	INSERT INTO Estados VALUES (6,'CE');
	INSERT INTO Estados VALUES (7,'DF');
	INSERT INTO Estados VALUES (8,'ES');
	INSERT INTO Estados VALUES (9,'GO');
	INSERT INTO Estados VALUES (10,'MA');
	INSERT INTO Estados VALUES (11,'MT');
	INSERT INTO Estados VALUES (12,'MS');
	INSERT INTO Estados VALUES (13,'MG');
	INSERT INTO Estados VALUES (14,'PA');
	INSERT INTO Estados VALUES (15,'PB');
	INSERT INTO Estados VALUES (16,'PR');
	INSERT INTO Estados VALUES (17,'PE');
	INSERT INTO Estados VALUES (18,'PI');
	INSERT INTO Estados VALUES (19,'RJ');
	INSERT INTO Estados VALUES (20,'RN');
	INSERT INTO Estados VALUES (21,'RS');
	INSERT INTO Estados VALUES (22,'RO');
	INSERT INTO Estados VALUES (23,'RR');
	INSERT INTO Estados VALUES (24,'SC');
	INSERT INTO Estados VALUES (25,'SP');
	INSERT INTO Estados VALUES (26,'SE');
	INSERT INTO Estados VALUES (27,'TO');
END

IF NOT EXISTS(SELECT * FROM Times)
BEGIN
	INSERT INTO Times VALUES (1,'Am�rica-MG','A', 13);
	INSERT INTO Times VALUES (2,'Athletico','A', 16);
	INSERT INTO Times VALUES (3,'Atl�tico-GO','A', 9);
	INSERT INTO Times VALUES (4,'Atl�tico-MG','A', 13);
	INSERT INTO Times VALUES (5,'Ava�','A', 24);
	INSERT INTO Times VALUES (6,'Botafogo','A', 19);
	INSERT INTO Times VALUES (7,'Bragantino','A', 25);
	INSERT INTO Times VALUES (8,'Cear�','A', 6);
	INSERT INTO Times VALUES (9,'Corinthians','A', 25);
	INSERT INTO Times VALUES (10,'Coritiba','A', 16);
	INSERT INTO Times VALUES (11,'Cuiab�','A', 11);
	INSERT INTO Times VALUES (12,'Flamengo','A', 19);
	INSERT INTO Times VALUES (13,'Fluminense','A', 19);
	INSERT INTO Times VALUES (14,'Fortaleza','A', 6);
	INSERT INTO Times VALUES (15,'Goi�s','A', 9);
	INSERT INTO Times VALUES (16,'Juventude','A', 21);
	INSERT INTO Times VALUES (17,'Internacional','A', 21);
	INSERT INTO Times VALUES (18,'Palmeiras','A', 25);
	INSERT INTO Times VALUES (19,'Santos','A', 25);
	INSERT INTO Times VALUES (20,'S�o Paulo','A', 25);
	INSERT INTO Times VALUES (21, 'Vasco', 'B', 19);
	INSERT INTO Times VALUES (22, 'Cruzeiro', 'B', 13);
	INSERT INTO Times VALUES (23, 'Grêmio', 'B', 21);
	INSERT INTO Times VALUES (24, 'Bahia', 'B', 5);
END

IF NOT EXISTS(SELECT * FROM TimesTitulos)
BEGIN 
	INSERT INTO TimesTitulos VALUES (6, 0, 3, 1, 3, 20);
	INSERT INTO TimesTitulos VALUES (8, 1, 3, 0, 2, 19);
	INSERT INTO TimesTitulos VALUES (10, 4, 3, 0, 0, 18);
	INSERT INTO TimesTitulos VALUES (3, 1, 2, 1, 1, 17);
	INSERT INTO TimesTitulos VALUES (0, 1, 0, 0, 0, 16);
	INSERT INTO TimesTitulos VALUES (0, 0, 0, 0, 0, 15);
	INSERT INTO TimesTitulos VALUES (0, 0, 0, 0, 0, 14);
	INSERT INTO TimesTitulos VALUES (4, 1, 0, 0, 0, 13);
	INSERT INTO TimesTitulos VALUES (8, 3, 2, 0, 1, 12);
	INSERT INTO TimesTitulos VALUES (0, 0, 0, 0, 0, 11);
	INSERT INTO TimesTitulos VALUES (0, 0, 0, 0, 0, 10);
	INSERT INTO TimesTitulos VALUES (7, 3, 1, 0, 1, 9);
	INSERT INTO TimesTitulos VALUES (0, 0, 0, 0, 0, 8);
	INSERT INTO TimesTitulos VALUES (0, 1, 0, 0, 0, 7);
	INSERT INTO TimesTitulos VALUES (0, 0, 0, 0, 0, 6);
	INSERT INTO TimesTitulos VALUES (0, 0, 0, 0, 0, 5);
	INSERT INTO TimesTitulos VALUES (2, 2, 1, 0, 0, 4);
	INSERT INTO TimesTitulos VALUES (0, 0, 0, 0, 0, 3);
	INSERT INTO TimesTitulos VALUES (1, 1, 0, 2, 0, 2);
	INSERT INTO TimesTitulos VALUES (0, 0, 0, 0, 0, 1);
	INSERT INTO TimesTitulos VALUES (4,	1, 1, 0, 0, 21);
	INSERT INTO TimesTitulos VALUES (4,	6, 2, 0, 0, 22);
	INSERT INTO TimesTitulos VALUES (2,	5, 3, 0, 1, 23);
	INSERT INTO TimesTitulos VALUES (2,	0, 0, 0, 0, 24);
END