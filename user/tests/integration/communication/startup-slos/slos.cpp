#include "application.h"
#include "test.h"

test(slo_startup_stats) {
    Particle.connect();
    waitUntil(Particle.connected);
    uint32_t free_mem = System.freeMemory();
    assertMoreOrEqual(free_mem, 60000);
}