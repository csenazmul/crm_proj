<template>
    <div class="container">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Sign Up</h1>
                <span class="icon-text">
                <span class="icon">
                    <i class="fas fa-home"></i>
                </span>
                <span>Home</span>
                </span>
                <form action="">
                    <div class="field">
                        <label class="">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input type="email" name="email" class="input" placeholder="Email">
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                            </span>
                        </div>
                    </div>
                    
                    <div class="field">
                        <label class="">Password</label>
                        <div class="control">
                            <input type="password" name="password1" class="input" placeholder="Password">
                        </div>
                    </div>

                    <div class="field">
                        <label class="">Repeat Password</label>
                        <div class="control">
                            <input type="password" name="password2" class="input" placeholder="Repeat Password">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-success">Sign Up</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'SignUp'
    }

</script>