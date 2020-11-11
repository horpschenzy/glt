<?php
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Illuminate\Support\Facades\DB;
use App\User;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        // app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'add members']);
        Permission::create(['name' => 'edit members']);
        Permission::create(['name' => 'delete members']);
        Permission::create(['name' => 'view members']);
        Permission::create(['name' => 'add users']);
        Permission::create(['name' => 'edit users']);
        Permission::create(['name' => 'delete users']);
        Permission::create(['name' => 'view users']);
        Permission::create(['name' => 'add organs']);
        Permission::create(['name' => 'edit organs']);
        Permission::create(['name' => 'delete organs']);
        Permission::create(['name' => 'view organs']);
        Permission::create(['name' => 'add events']);
        Permission::create(['name' => 'edit events']);
        Permission::create(['name' => 'delete events']);
        Permission::create(['name' => 'view events']);
        Permission::create(['name' => 'add reports']);
        Permission::create(['name' => 'edit reports']);
        Permission::create(['name' => 'delete reports']);
        Permission::create(['name' => 'view reports']);
        Permission::create(['name' => 'add attendance']);
        Permission::create(['name' => 'edit attendance']);
        Permission::create(['name' => 'delete attendance']);
        Permission::create(['name' => 'view attendance']);
        Permission::create(['name' => 'add settings']);
        Permission::create(['name' => 'edit settings']);
        Permission::create(['name' => 'delete settings']);
        Permission::create(['name' => 'view setttings']);

        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'ahom']);
        $role1->givePermissionTo('view members');
        $role1->givePermissionTo('view organs');
        $role1->givePermissionTo('view events');

        $role2 = Role::create(['name' => 'head-of-ministry']);
        $role2->givePermissionTo('view members');
        $role2->givePermissionTo('view organs');
        $role2->givePermissionTo('view events');

        $role3 = Role::create(['name' => 'admin']);
        $role3->givePermissionTo('view members');
        $role3->givePermissionTo('add members');
        $role3->givePermissionTo('edit members');
        $role3->givePermissionTo('add events');
        $role3->givePermissionTo('edit events');
        $role3->givePermissionTo('view events');

        $role4 = Role::create(['name' => 'super-admin']);
        $role4->givePermissionTo(Permission::all());

        $role5 = Role::create(['name' => 'member']);

        // create demo users
        $user = User::firstOrCreate([
                    'name' => 'member',
                    'username' => 'member',
                    'email' => 'member@me.com',
                    'phone' => '01123456789',
                    'password' => bcrypt('123456789')
                ]);
        $user->assignRole($role5);

        $user = User::firstOrCreate([
                    'name' => 'ahom',
                    'username' => 'ahom',
                    'email' => 'ahom@me.com',
                    'phone' => '123456789',
                    'password' => bcrypt('123456789')
                ]);
        $user->assignRole($role1);

        $user = User::firstOrCreate([
                    'name' => 'hom',
                    'username' => 'hom',
                    'email' => 'hom@me.com',
                    'phone' => '12345678',
                    'password' => bcrypt('123456789')
                ]);
        $user->assignRole($role2);

        $user = User::firstOrCreate([
                    'name' => 'admin',
                    'username' => 'admin',
                    'email' => 'admin@me.com',
                    'phone' => '1234567',
                    'password' => bcrypt('123456789')
                ]);
        $user->assignRole($role3);


        $user = User::firstOrCreate([
                    'name' => 'superadmin',
                    'username' => 'superadmin',
                    'email' => 'superadmin@me.com',
                    'phone' => '1234567890',
                    'password' => bcrypt('123456789')
                ]);
        $user->assignRole($role4);
    }
}
