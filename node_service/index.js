const os = require("os");
const fastify = require("fastify")({ logger: true });

// Declare a route
fastify.get("/", function handler(request, reply) {
	return reply.send({
		hostname: os.hostname(),
		arch: os.arch(),
		homedir: os.homedir(),
		machine: os.machine(),
		platform: os.platform(),
		release: os.release(),
		tmpdir: os.tmpdir(),
		userInfo: os.userInfo(),
		cpus: os.cpus(),
	});
});

fastify.listen({ port: 3000, host: "0.0.0.0" }, (err) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
