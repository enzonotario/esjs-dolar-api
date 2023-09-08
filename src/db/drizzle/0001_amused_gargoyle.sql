CREATE TABLE `extracciones` (
	`id` integer PRIMARY KEY NOT NULL,
	`moneda` text,
	`casa` text,
	`compra` real,
	`venta` real,
	`fecha` integer DEFAULT (strftime('%s', 'now'))
);
