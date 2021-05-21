const system = require ( 'os' );

// Platform

let platform_display = platform ()

function platform ()
{
    let os;

    if (system.platform == 'darwin')
    {
        os = 'macOS'    
    }

    else if (system.platform == 'win32')
    {
        os = 'Windows'
    }

    else if (system.platform == 'linux')
    {
        os = 'Linux'
    }

    else
    {
        os = 'Other'
    };

    console.log ( 'OS: ' + os )
}

// CPU Arch

let cpu_arch_display = cpu_arch ()

function cpu_arch ()
{
    let bit_number;

    if ( system.arch == 'x64' )
    {
        bit_number = ' (64 bit)'
    }

    else if ( system.arch == 'x86' )
    {
        bit_number = ' (32 bit)'
    }

    else
    {
        bit_number = ' (unsure number of bits)'
    }

    console.log ( 'CPU Arch: ' + system.arch () + bit_number );
}

// CPU Core Info

let cores = system.cpus ()

console.log ( 'CPU Cores: ' + cores [0].model + ' (' + cores.length + ')' );

// Memory

let mem_display = mem ()

function mem ()
{
    // Free Memory

    let free_mem = system.freemem ()

    let free_mem_rounded;

    if ( free_mem < 1000 )
    {
        free_mem_rounded = Math.round(free_mem) + ' B'
    }

    else if ( free_mem >= 1000 && free_mem < 1000000 )
    {
        free_mem_rounded = Math.round(free_mem / 1000) + ' KB'
    }

    else if ( free_mem >= 1000000 && free_mem < 1000000000)
    {
        free_mem_rounded = Math.round(free_mem / 1000000) + ' MB'
    }

    else if ( free_mem >= 1000000000 && free_mem < 1000000000000 )
    {
        free_mem_rounded = Math.round(free_mem / 1000000000) + ' GB'
    }

    else
    {
        free_mem_rounded = Math.round(free_mem / 1000000000000) + ' TB'
    }

    // Total Memory

    let total_mem = system.totalmem ()
    let total_mem_rounded;

    if ( total_mem < 1000 )
    {
        total_mem_rounded = Math.round(total_mem) + ' B'
    }

    else if ( total_mem >= 1000 && total_mem < 1000000 )
    {
        total_mem_rounded =  Math.round(total_mem / 1000) + ' KB'
    }

    else if ( total_mem >= 1000000 && total_mem < 1000000000)
    {
        total_mem_rounded = Math.round(total_mem / 1000000) + ' MB'
    }

    else if ( total_mem >= 1000000000 && total_mem < 1000000000000 )
    {
        total_mem_rounded = Math.round(total_mem / 1000000000) + ' GB'
    }

    else
    {
        total_mem_rounded = Math.round(total_mem / 1000000000000) + ' TB'
    }

    console.log ( 'Memory: ' + free_mem_rounded + ' free of ' + total_mem_rounded )
}

// Uptime

let uptime_display = uptime_clock ()

function uptime_clock ()
{
    let uptime = system.uptime ()

    let uptime_rounded;

    if ( uptime < 60)
    {
        uptime_rounded = Math.round(uptime) + ' sec'
    }

    else if ( uptime >= 60 && uptime < 3600 )
    {
        uptime_rounded = Math.round(uptime / 60) + ' min'
    }

    else if ( uptime == 3600 )
    {
        uptime_rounded = Math.round(uptime / 3600) + ' hour'
    }

    else if ( uptime > 3600 && uptime < 86400)
    {
        uptime_rounded = Math.round(uptime / 3600) + ' hours'
    }

    else
    {
        uptime_rounded = Math.round(uptime / 86400) + ' days'
    }

    console.log ( 'Uptime: ' + uptime_rounded )
}

// Home Dir

console.log ( 'Home Dir: ' + system.homedir () )